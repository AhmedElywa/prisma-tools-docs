import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Tailwind CSS v4 uses lightningcss by default if installed
  // For Next.js 15, ensure experimental features are handled if needed
  // experimental: {
  //   ppr: true, // If you want to use Partial Prerendering
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(nextConfig);
