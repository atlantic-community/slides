import type { NextConfig } from "next";

// GitHub Pages serves the app from a project subpath (https://<org>.github.io/<repo>/),
// so the CI workflow passes that prefix via PAGES_BASE_PATH. Empty locally → app runs at root.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Fully static, server-less build (`next build` emits an `out/` directory) so the
  // app can be hosted on GitHub Pages with no Node runtime.
  output: "export",
  // Map extensionless URLs to `path/index.html`, which is what GitHub Pages serves.
  trailingSlash: true,
  basePath,
  // No image optimization server in a static export.
  images: { unoptimized: true },
  // @atlantic-community-slides/ui and @atlantic-community-slides/decks ship raw .tsx via their exports maps.
  transpilePackages: [
    "@atlantic-community-slides/ui",
    "@atlantic-community-slides/decks",
  ],
};

export default nextConfig;
