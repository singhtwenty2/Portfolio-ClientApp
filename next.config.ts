import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
  env: {
    WEB3FORMS_API_KEY: process.env.WEB3FORMS_API_KEY,
  },
};
export default nextConfig;