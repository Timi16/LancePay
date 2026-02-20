import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

export function middleware(request: NextRequest) {
  // Generate a unique nonce for this request
  const nonce = randomUUID();

  // Clone the request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // Create the response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Add nonce to response headers so it can be accessed in headers().
  response.headers.set('x-nonce', nonce);

  return response;
}

// Middleware will run on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
