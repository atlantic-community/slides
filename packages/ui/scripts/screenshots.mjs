/**
 * Renders every Components/* and Layouts/* story from the built Storybook
 * (storybook-static/) and saves a 1280x720 PNG per story into screenshots/.
 *
 * Usage: pnpm build-storybook && node scripts/screenshots.mjs [--only <substring>]
 */
import { createServer } from "node:http";
import { readFile, mkdir, rm } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const root = fileURLToPath(new URL("..", import.meta.url));
const staticDir = join(root, "storybook-static");
const outDir = join(root, "screenshots");

const only = (() => {
  const i = process.argv.indexOf("--only");
  return i === -1 ? null : process.argv[i + 1];
})();

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};

if (!existsSync(join(staticDir, "index.json"))) {
  console.error(
    "storybook-static/index.json not found. Run build-storybook first.",
  );
  process.exit(1);
}

const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const filePath = normalize(
    join(staticDir, urlPath === "/" ? "index.html" : urlPath),
  );
  if (!filePath.startsWith(staticDir) || !existsSync(filePath)) {
    res.writeHead(404);
    res.end();
    return;
  }
  res.writeHead(200, {
    "content-type": MIME[extname(filePath)] ?? "application/octet-stream",
  });
  createReadStream(filePath).pipe(res);
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;

const index = JSON.parse(await readFile(join(staticDir, "index.json"), "utf8"));
const stories = Object.values(index.entries).filter(
  (e) =>
    e.type === "story" &&
    (e.title.startsWith("Components/") || e.title.startsWith("Layouts/")) &&
    (!only || e.id.includes(only)),
);

if (stories.length === 0) {
  console.error("No matching stories found.");
  server.close();
  process.exit(1);
}

if (!only) await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
});

for (const story of stories) {
  await page.goto(
    `http://127.0.0.1:${port}/iframe.html?id=${story.id}&viewMode=story`,
    {
      waitUntil: "networkidle",
    },
  );
  await page.waitForSelector("#storybook-root > *", { timeout: 15000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  const file = join(outDir, `${story.id}.png`);
  await page.screenshot({ path: file });
  console.log(`✓ ${story.id}`);
}

await browser.close();
server.close();
console.log(`\n${stories.length} screenshots written to ${outDir}`);
