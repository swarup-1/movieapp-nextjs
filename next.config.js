/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ia.media-imdb.com',
        port: '',
        pathname: '/images/M/**',
      },
    ],
  },

}

module.exports = nextConfig
