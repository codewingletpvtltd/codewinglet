/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: 'strapi-cw-assets.s3.us-east-1.amazonaws.com',
      },
      // {
      //   hostname: 'strapi.codewinglet.com',
      // },
    ],
  },
  env: {
    AIRTABLE_SECRET_API_TOKEN:
      'patBdMmh6Qpef9paj.61b4777ff1d4ff13fa0b3f02d47a05ceecba28bff10e2c1ad7d827ff5b6cff38',
  },
};

module.exports = nextConfig;
