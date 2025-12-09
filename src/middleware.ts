import { NextResponse } from 'next/server';

// Security headers for production
const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://wa.me https://api.whatsapp.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; '),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'payment=()',
    'usb=()',
    'magnetometer=()',
    'gyroscope=()',
    'accelerometer=()'
  ].join(', '),
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Access-Control-Allow-Origin': process.env.NODE_ENV === 'development' ? '*' : 'https://dataloom.id',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400'
};

export function middleware(request: Request) {
  const response = NextResponse.next();

  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Rate limiting simulation (basic)
  const ip = request.ip || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 100; // max requests per minute

  // In production, you'd use Redis or similar for distributed rate limiting
  // This is a simple in-memory simulation
  const rateLimitData = global.rateLimitData || {};
  global.rateLimitData = rateLimitData;

  if (!rateLimitData[ip]) {
    rateLimitData[ip] = { count: 1, resetTime: now + windowMs };
  } else {
    if (now > rateLimitData[ip].resetTime) {
      rateLimitData[ip] = { count: 1, resetTime: now + windowMs };
    } else {
      rateLimitData[ip].count++;
    }
  }

  if (rateLimitData[ip].count > maxRequests) {
    return new Response('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
        'X-RateLimit-Limit': maxRequests.toString(),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': rateLimitData[ip].resetTime.toString()
      }
    });
  }

  // Add rate limit headers
  response.headers.set('X-RateLimit-Limit', maxRequests.toString());
  response.headers.set('X-RateLimit-Remaining', Math.max(0, maxRequests - rateLimitData[ip].count).toString());
  response.headers.set('X-RateLimit-Reset', rateLimitData[ip].resetTime.toString());

  // Bot detection
  const userAgent = request.headers.get('user-agent') || '';
  const suspiciousPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python/i,
    /java/i,
    /perl/i,
    /php/i
  ];

  const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(userAgent));
  
  if (isSuspicious && !userAgent.includes('googlebot') && !userAgent.includes('bingbot')) {
    // Log suspicious activity
    console.warn(`Suspicious user agent detected: ${userAgent} from IP: ${ip}`);
    
    // In production, you might want to return a different response or challenge
    // For now, we'll just log it
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};