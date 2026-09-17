import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Bypasses Next.js image optimization server for local files
  },
};

export default nextConfig;