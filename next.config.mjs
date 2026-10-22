/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1280, 1600],
    imageSizes: [96, 160, 256, 384],
    minimumCacheTTL: 31536000,
    qualities: [75, 80],
  },
  async redirects() {
    const r = (source, destination) => ({ source, destination, permanent: true });
    return [
      r('/trekking', '/ratapani-trekking'),
      r('/trekking-near-bhopal', '/ratapani-trekking'),
      r('/ratapani-trek', '/ratapani-trekking'),
      r('/birdwatching', '/birdwatching-in-ratapani'),
      r('/birds', '/birdwatching-in-ratapani'),
      r('/birdwatching-near-bhopal', '/birdwatching-in-ratapani'),
      r('/monsoon', '/ratapani-in-monsoon'),
      r('/ratapani-monsoon', '/ratapani-in-monsoon'),
    ];
  },
  async headers() {
    return [
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
