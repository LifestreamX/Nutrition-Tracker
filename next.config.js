/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  test: /\\.(png|jp(e*)g|svg|gif)$/,
  use: ['file-loader'],

  images: {
    domains: ['www.edamam.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.edamam.com',
        pathname: '/food-img/**',
      },
    ],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
