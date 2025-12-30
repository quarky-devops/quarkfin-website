import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl

    // Allow the Coming-Soon page itself and Next.js internals
    const isPublic =
        pathname.startsWith('/coming-soon') ||
        pathname.startsWith('/_next') ||           // build assets
        pathname.startsWith('/favicon') ||
        pathname.match(/\.(ico|png|jpg|jpeg|svg|js|css)$/)

    if (isPublic) {
        return NextResponse.next()
    }

    // Redirect everything else
    return NextResponse.redirect(new URL('/coming-soon', request.url))
}
