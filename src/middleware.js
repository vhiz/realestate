import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions } from "./lib/utils";
export async function middleware(request) {
  const session = await getIronSession(cookies(), sessionOptions);
  const profile = request.nextUrl?.pathname.startsWith("/profile");

  if (!session.isLoggedIn && profile) {
    return Response.redirect(new URL("/login", request.nextUrl));
  }
}
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
