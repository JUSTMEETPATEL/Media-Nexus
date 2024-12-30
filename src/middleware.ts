import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextResponse, type NextRequest } from "next/server";

type Session = typeof auth.$Infer.Session;

export default async function authMiddleware(request: NextRequest) {
    const { data: session } = await betterFetch<Session>(
        "/api/auth/get-session",
        {
            baseURL: request.nextUrl.origin,
            headers: {
                // Get the cookie from the request
                cookie: request.headers.get("cookie") || "",
            },
        }
    );

    const allowedPagesForAuth = ["/forgot-password", "/reset-password", "/dashboard"];
    const isAuthPage = allowedPagesForAuth.includes(request.nextUrl.pathname);

    if (session && !isAuthPage) {
        // Redirect authenticated users away from non-allowed pages
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
        // Redirect non-authenticated users trying to access the dashboard
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"], 
};