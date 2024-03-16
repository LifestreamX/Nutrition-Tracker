/** @type {import('next').NextConfig} */
// import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponents: true,
    serverActions: true,
  },

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
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      });
    }

    return config;
  },
};

module.exports = nextConfig;
