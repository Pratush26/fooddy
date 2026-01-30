import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function proxy(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  const isProtected = request.nextUrl.pathname.startsWith("/dashboard");

  if (isProtected && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
 
export const config = {
  matcher: '/dashboard',
}