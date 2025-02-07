import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  env: {
    WEB3FORMS_API_KEY: process.env.WEB3FORMS_API_KEY,
  },
};

export default nextConfig;
