/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.***'
      },
      {
        protocol: 'https',
        hostname: 'takashinishi.***'
      }
    ],
  }
};

export default nextConfig;