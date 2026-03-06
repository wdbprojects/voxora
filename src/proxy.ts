import { NextResponse, NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { routes } from "@/config/routes";

export async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;
  if (sessionCookie && [routes.login, routes.register].includes(pathname)) {
    return NextResponse.redirect(new URL(routes.dashboard, request.url));
  }
  if (!sessionCookie && pathname.startsWith(routes.dashboard)) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  }
  return NextResponse.next();
}
