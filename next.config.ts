import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

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

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
