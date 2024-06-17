import authConfig from "./auth.config";
import NextAuth from "next-auth";

import { NextRequest, NextResponse } from "next/server";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  // const session = await auth();
  // console.log(req.nextUrl.pathname);
  // if (!session && req.nextUrl.pathname.startsWith("/")) {
  //   return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_HOST}/login`);
  // }
});

// export const config = {
//   matcher: ["/", "/login"],
// };
