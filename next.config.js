/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,

  images: {
    // Prefer new syntax for safety + flexibility
    remotePatterns: [
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'example.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'ibb.co' },
      { protocol: 'https', hostname: 'www.w3.org' },
      { protocol: 'https', hostname: 'gravatar.com' },
      { protocol: 'https', hostname: 'i.imgur.com' },
      { protocol: 'https', hostname: 'imgur.com' },
    ],

    // Disable optimization in dev to avoid 500 fetch errors
    unoptimized: isDev,
  },

  // Optional: helpful for large builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;