import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./app/services/auth";
type Role = keyof typeof roleBasedPrivateRotes;

const authRoutes = ["/login", "/register", "/", "/tutors", "/about"];

const roleBasedPrivateRotes = {
  user: [/^\/user/, /^\/create-shop/],
  admin: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  console.log("userInfo: ", userInfo);
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          //`https://tutorlink-client-side.vercel.app/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userInfo?.role && roleBasedPrivateRotes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRotes[userInfo?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  if (pathname.startsWith("/dashboard") && userInfo.role !== "user") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: ["/admin", "/admin/:path*", "/user/:path*"],
};
