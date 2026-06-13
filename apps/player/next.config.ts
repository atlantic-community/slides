import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @atlantic-community-slides/ui and @atlantic-community-slides/decks ship raw .tsx via their exports maps.
  transpilePackages: [
    "@atlantic-community-slides/ui",
    "@atlantic-community-slides/decks",
  ],
};

export default nextConfig;
