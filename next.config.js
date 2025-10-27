/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'pub-5d8d123f40ca4253a52ba12f2a715ff2.r2.dev',
      },
    ],
  },
}

module.exports = nextConfig
