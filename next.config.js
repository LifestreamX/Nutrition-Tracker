/** @type {import('next').NextConfig} */
// import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponents: true, // Enable serverComponents for Server Actions
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

  reactStrictMode: false,

  publicRuntimeConfig: {
    staticFolder: 'public',
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

// export default withPlaiceholder(nextConfig);
