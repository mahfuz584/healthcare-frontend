import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  transpilePackages: ["mui-file-input"],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
