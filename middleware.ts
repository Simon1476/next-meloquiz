import authConfig from "./auth.config";
import NextAuth from "next-auth";

import { NextRequest, NextResponse } from "next/server";
import { auth as sessionCheck } from "@/auth";

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  const session = await sessionCheck();
  const reqUrl = new URL(req.nextUrl);

  console.log("reqUrl=", req.nextUrl);
  if (!session && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(
      new URL(
        `api/auth/signin?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`,
        req.nextUrl
      )
    );
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
