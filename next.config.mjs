/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Note: removed `eslint`, `swcMinify` and `optimizeFonts` keys because
  // Next 16 reports those options as unrecognized in `next.config.mjs`.
  // Keep the config minimal and rely on dedicated ESLint/TS config files.
}

export default nextConfig
