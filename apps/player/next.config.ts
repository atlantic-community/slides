import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @repo/ui and @repo/decks ship raw .tsx via their exports maps.
  transpilePackages: ["@repo/ui", "@repo/decks"],
};

export default nextConfig;
