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

// Update public routes to be more specific
const PUBLIC_ROUTES = ['/', '/about', '/facility', '/sign-in', '/team'];

export default async function authMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Middleware running for path:', pathname);

  // Make public route check exact or for static assets
  if (
    PUBLIC_ROUTES.includes(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    console.log('Public route accessed:', pathname);
    return NextResponse.next();
  }

  try {
    // Get session using Better Auth
    const { data: session } = await betterFetch<Session>(
      '/api/auth/get-session',
      {
        baseURL: request.nextUrl.origin,
        headers: {
          cookie: request.headers.get('cookie') || '',
        },
      }
    );

    console.log('Session:', session);

    if (!session) {
      console.log('No session found, redirecting to sign-in');
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // Fetch user role using your API
    const response = await fetch(`${request.nextUrl.origin}/api/check-role`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: session.user.email }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch role');
    }

    const roleData = await response.json();
    console.log('Role data:', roleData);

    const role = roleData?.role as Role;
    const hasAccess = ROUTE_ACCESS[role]?.some((route) =>
      pathname.startsWith(route)
    );

    console.log('Role:', role);
    console.log('Has access:', hasAccess);

    if (!hasAccess) {
      const defaultRoute = ROUTE_ACCESS[role]?.[0] || '/';
      console.log('Access denied, redirecting to:', defaultRoute);
      return NextResponse.redirect(new URL(defaultRoute, request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/faculty/:path*',
    '/admin/:path*',
    '/dashboard',
    '/faculty',
    '/admin',
  ],
};
