import { NextResponse } from 'next/server'
import { verifyJwtToken } from "./utils/auth"
import isAuthPages from './utils/isAuthPages'

export async function middleware(request) {
    const { url, nextUrl, cookies } = request
    const { value: token } = cookies.get('token') ?? { value: null } // to name of value with token
    // to verify token
    const hasVerifiedToken = token && await verifyJwtToken(token)

    const isAuthPageRequested = isAuthPages(nextUrl.pathname)

    if (isAuthPageRequested) {
        if (!hasVerifiedToken) {
            const response = NextResponse.next()
            return response
        }
        const response = NextResponse.redirect(new URL(`/`, url)); // if user want to go to the landing page but user have token
        return response
    }


    if (!hasVerifiedToken) {

        // kind of keeping the destination in memory, redirecting there after login
        const searchParams = new URLSearchParams(nextUrl.searchParams)
        searchParams.set("next", nextUrl.pathname)

        const response = NextResponse.redirect(
            new URL(`/landing?${searchParams}`, url)
        );
        response.cookies.delete("token");
        return response;

    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/',
        '/stats',
        '/addtask',
        '/landing'
    ]
}