import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["import"],
  },

  images: {
    qualities: [60, 75],
  },

  async redirects() {
    return [
      {
        source: "/capability/:id",
        destination: "/projects/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
