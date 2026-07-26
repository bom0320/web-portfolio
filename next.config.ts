import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["import"],
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
