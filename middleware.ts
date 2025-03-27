//check the session and redirect to the login page if the user is not signed in

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("Token from middleware:", token); // Debugging log

  //if there is no token redirect the user to login page
  if (!token) {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// This ensures that the middleware applies to all routes in your app
export const config = {
  matcher: ["/", "/insurance", "/services", "/kteo"], // Protected routes
};
