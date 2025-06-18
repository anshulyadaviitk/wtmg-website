/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'iitr.ac.in',
      'pbs.twimg.com',
      'hitwebcounter.com' // <-- add this line
    ],
  },
};

module.exports = nextConfig;
