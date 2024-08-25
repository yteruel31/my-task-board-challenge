import { NextRequest, NextResponse } from "next/server";
import { verifyRequestOrigin } from "lucia";

export const config = { matcher: ["/boards/(.*)"] };

export async function middleware(request: NextRequest) {
  if (request.method === "GET") {
    return NextResponse.next();
  }

  const originHeader = request.headers.get("Origin");
  const hostHeader = request.headers.get("X-Forwarded-Host");

  if (
    !originHeader ||
    !hostHeader ||
    !verifyRequestOrigin(originHeader, [hostHeader])
  ) {
    return new NextResponse(null, {
      status: 403,
    });
  }

  return NextResponse.next();
}
