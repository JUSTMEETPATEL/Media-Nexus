import { betterFetch } from '@better-fetch/fetch';
import type { auth } from '@/lib/auth';
import { NextResponse, type NextRequest } from 'next/server';

type Session = typeof auth.$Infer.Session;

type Role = 'user' | 'faculty' | 'admin';

type RouteAccess = {
  [K in Role]: string[];
};

const ROUTE_ACCESS: RouteAccess = {
  user: ['/dashboard'],
  faculty: ['/faculty'],
  admin: ['/admin'],
};

const PUBLIC_ROUTES = ['/', '/about', '/facility', '/sign-in', '/team'];
const AUTH_ROUTES = ['/sign-in', '/sign-up'];

export default async function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets and API routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Check if current path is public
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  try {
    // Fetch session
    const { data: session } = await betterFetch<Session>(
      '/api/auth/get-session',
      {
        baseURL: request.nextUrl.origin,
        headers: {
          cookie: request.headers.get('cookie') || '',
        },
      }
    );

    // Redirect authenticated users from auth routes to their dashboard
    if (session && isAuthRoute) {
      const response = await fetch(`${request.nextUrl.origin}/api/check-role`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: session.user.email }),
      });
      const roleData = await response.json();
      const role = roleData?.role as Role;
      const defaultRoute = ROUTE_ACCESS[role]?.[0] || '/';
      return NextResponse.redirect(new URL(defaultRoute, request.url));
    }

    // Allow public route access
    if (isPublicRoute) return NextResponse.next();

    // Redirect unauthenticated users to sign-in
    if (!session) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // Fetch user role
    const response = await fetch(`${request.nextUrl.origin}/api/check-role`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: session.user.email }),
    });
    if (!response.ok) throw new Error('Failed to fetch role');
    const roleData = await response.json();
    const role = roleData?.role as Role;

    // Check route access
    const hasAccess = ROUTE_ACCESS[role]?.some(route => 
      pathname.startsWith(route)
    );

    // Redirect if no access
    if (!hasAccess) {
      const defaultRoute = ROUTE_ACCESS[role]?.[0] || '/';
      return NextResponse.redirect(new URL(defaultRoute, request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
