import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export untuk GitHub Pages/Vercel
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  
  // Environment variables untuk production
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Headers untuk security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;