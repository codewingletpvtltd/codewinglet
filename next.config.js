/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      },
      {
        hostname: 'strapi.codewinglet.com',
      },
    ],
  },
};

module.exports = nextConfig;
