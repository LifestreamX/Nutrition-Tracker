/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  test: /\\.(png|jp(e*)g|svg|gif)$/,
  use: ['file-loader'],

  images: {
    domains: ['www.edamam.com'],
  },
};

module.exports = nextConfig;
