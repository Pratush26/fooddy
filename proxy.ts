import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import verifyToken from './lib/verifyToken';
 
const adminRoutes = ['/add-food']
const userRoutes = ['/dashboard']
const authRoutes = ['/login', '/register']

export function proxy(request: NextRequest) {
  const tokenRole = verifyToken(request);
  const path = request.nextUrl.pathname;

  if(!tokenRole && userRoutes.includes(path)) return NextResponse.redirect(new URL("/login", request.url));
  if(!tokenRole && adminRoutes.includes(path)) return NextResponse.redirect(new URL("/login", request.url));
  if(tokenRole && authRoutes.includes(path)) return NextResponse.redirect(new URL("/dashboard", request.url));

  return NextResponse.next();
}
 
export const config = {
  matcher: [
    '/dashboard',
    '/add-food',
    '/login', '/register'
  ]
}