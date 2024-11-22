import { getUserSession, updateSession } from '@server/lib/session';
import { ADMIN_TOKEN } from '@server/utils';
import { authRoutes, HOME, LOGIN, protectedRoutes, superAdminRoutes } from '@utils/routes';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(
    (route) => path.startsWith(route) || path.endsWith(route),
  );
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route));
  const isSuperAdminRoute = superAdminRoutes.some((route) =>
    path.startsWith(route),
  );

  const token = request.cookies.get(ADMIN_TOKEN)?.value;
  const user = await getUserSession();

  //role is not SUPER_ADMIN don't access this routes
  if (user?.role !== 'ADMIN' && isSuperAdminRoute) {
    return NextResponse.redirect(new URL(HOME, request.nextUrl));
  }

  // Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !token) {
    const url = new URL(LOGIN, request.nextUrl);
    url.searchParams.append('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // Redirect to /admin as a authenticated user
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL(HOME, request.nextUrl));
  }

  return await updateSession(request); //always return this to persist session
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
