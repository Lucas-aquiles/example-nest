/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['default'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  swcMinify: true,
  images: {
    domains: [
      'developerlatam.com','rifa-club-strapi-develop.onrender.com','sb.kaleidousercontent.com'
    ],
  },
};

module.exports = nextConfig;
