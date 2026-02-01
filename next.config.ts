import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.guestsnapper.com",
      },
    ],
  },
};

export default nextConfig;
