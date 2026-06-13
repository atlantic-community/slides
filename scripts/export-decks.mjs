#!/usr/bin/env node
/**
 * Export rendered decks from the static player build.
 *
 * Usage:
 *   pnpm export:decks
 *   pnpm export:decks -- --format images
 *   pnpm export:decks -- --format pdf --deck mock-design-system
 *   pnpm export:decks -- --force
 */
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { access, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { extname, join, normalize, relative, resolve, sep } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const appRoot = join(repoRoot, "apps/player");
const staticRoot = join(appRoot, "out");
const defaultOutDir = join(repoRoot, "exports");
const tmpDir = join(repoRoot, "exports", ".tmp");
const slideWidth = 1280;
const slideHeight = 720;
const requireFromPlayer = createRequire(join(appRoot, "package.json"));
const { chromium } = requireFromPlayer("playwright");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function parseArgs(argv) {
  const options = {
    decks: [],
    format: "all",
    force: false,
    outDir: defaultOutDir,
    port: 4387,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--") {
      continue;
    } else if (arg === "--deck") {
      const value = argv[i + 1];
      if (!value) throw new Error("--deck requires a deck id");
      options.decks.push(value);
      i += 1;
    } else if (arg === "--format") {
      const value = argv[i + 1];
      if (!["all", "images", "pdf"].includes(value)) {
        throw new Error("--format must be one of: all, images, pdf");
      }
      options.format = value;
      i += 1;
    } else if (arg === "--out") {
      const value = argv[i + 1];
      if (!value) throw new Error("--out requires a folder path");
      options.outDir = resolve(process.cwd(), value);
      i += 1;
    } else if (arg === "--port") {
      const value = Number.parseInt(argv[i + 1] ?? "", 10);
      if (!Number.isFinite(value)) throw new Error("--port requires a number");
      options.port = value;
      i += 1;
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function printHelp() {
  console.log(`Export rendered decks.

Options:
  --deck <id>        Export one deck. Repeat to export several. Default: all decks.
  --format <format>  all, images, or pdf. Default: all.
  --out <folder>     Output folder. Default: ./exports.
  --force            Recreate existing images/PDFs. Default: skip existing outputs.
  --port <port>      Local static server port. Default: 4387.

Examples:
  pnpm export:decks
  pnpm export:decks -- --deck mock-design-system --format pdf
  pnpm export:decks -- --format images --force
`);
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function resolveStaticFile(urlPath) {
  const decodedPath = decodeURIComponent(urlPath);
  const cleanPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const pathWithoutSlash =
    cleanPath === sep ? "" : cleanPath.replace(/^[/\\]/, "");
  const candidates = [
    join(staticRoot, pathWithoutSlash),
    join(staticRoot, pathWithoutSlash, "index.html"),
    join(staticRoot, `${pathWithoutSlash}.html`),
  ];

  for (const candidate of candidates) {
    const resolved = resolve(candidate);
    if (!resolved.startsWith(resolve(staticRoot))) continue;
    try {
      const info = await stat(resolved);
      if (info.isFile()) return resolved;
    } catch {
      // try next candidate
    }
  }

  return join(staticRoot, "404.html");
}

function startStaticServer(port) {
  const server = createServer(async (req, res) => {
    try {
      const requestUrl = new URL(req.url ?? "/", `http://127.0.0.1:${port}`);
      const filePath = await resolveStaticFile(requestUrl.pathname);
      const extension = extname(filePath);
      const body = await readFile(filePath);
      res.writeHead(filePath.endsWith("404.html") ? 404 : 200, {
        "content-type": mimeTypes[extension] ?? "application/octet-stream",
      });
      res.end(body);
    } catch (error) {
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      res.end(error instanceof Error ? error.message : "Unknown server error");
    }
  });

  return new Promise((resolveServer, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", () => resolveServer(server));
  });
}

async function discoverDeckIds(page, baseUrl) {
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const ids = await page.$$eval('a[href*="/decks/"]', (links) =>
    Array.from(
      new Set(
        links
          .map((link) => {
            const href = link.getAttribute("href") ?? "";
            const match = href.match(/\/decks\/([^/?#]+)/);
            return match?.[1];
          })
          .filter(Boolean),
      ),
    ),
  );
  return ids.sort();
}

async function getSlideCount(page) {
  const text = await page.locator("body").innerText();
  const match = text.match(/\b1\s*\/\s*(\d+)\b/);
  if (!match)
    throw new Error("Could not read slide count from player controls");
  return Number.parseInt(match[1], 10);
}

function slideFileName(index) {
  return `slide-${String(index).padStart(3, "0")}.png`;
}

async function captureSlides({
  page,
  baseUrl,
  deckId,
  slideCount,
  imageDir,
  force,
}) {
  await mkdir(imageDir, { recursive: true });
  const imagePaths = [];

  for (let slideIndex = 1; slideIndex <= slideCount; slideIndex += 1) {
    const imagePath = join(imageDir, slideFileName(slideIndex));
    imagePaths.push(imagePath);
    if (!force && (await exists(imagePath))) continue;

    await page.goto(`${baseUrl}/decks/${deckId}/?slide=${slideIndex}`, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    await page.locator('[data-testid="slide-surface"]').waitFor({
      state: "visible",
    });
    await page.locator('[data-testid="slide-surface"]').screenshot({
      path: imagePath,
    });
  }

  return imagePaths;
}

async function writePdf({ page, pdfPath, imagePaths, force }) {
  if (!force && (await exists(pdfPath))) return false;

  const pages = await Promise.all(
    imagePaths.map(async (imagePath) => {
      const image = await readFile(imagePath);
      return `<section class="slide"><img src="data:image/png;base64,${image.toString("base64")}" /></section>`;
    }),
  );

  await page.setContent(
    `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      @page { size: ${slideWidth}px ${slideHeight}px; margin: 0; }
      html, body { margin: 0; padding: 0; background: #000; }
      .slide {
        width: ${slideWidth}px;
        height: ${slideHeight}px;
        page-break-after: always;
        break-after: page;
        overflow: hidden;
        background: #000;
      }
      .slide:last-child {
        page-break-after: auto;
        break-after: auto;
      }
      img {
        display: block;
        width: ${slideWidth}px;
        height: ${slideHeight}px;
      }
    </style>
  </head>
  <body>${pages.join("")}</body>
</html>`,
    { waitUntil: "load" },
  );
  await page.pdf({
    path: pdfPath,
    printBackground: true,
    preferCSSPageSize: true,
    width: `${slideWidth}px`,
    height: `${slideHeight}px`,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  return true;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }

  if (!(await exists(staticRoot))) {
    throw new Error(
      `Static build not found at ${relative(process.cwd(), staticRoot)}. Run "pnpm --filter player build" first.`,
    );
  }

  const baseUrl = `http://127.0.0.1:${options.port}`;
  const server = await startStaticServer(options.port);
  let browser;

  try {
    browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: { width: slideWidth, height: slideHeight },
      deviceScaleFactor: 1,
    });

    const discoveredDeckIds = await discoverDeckIds(page, baseUrl);
    const selectedDeckIds =
      options.decks.length > 0 ? options.decks : discoveredDeckIds;
    const unknownDeckIds = selectedDeckIds.filter(
      (deckId) => !discoveredDeckIds.includes(deckId),
    );
    if (unknownDeckIds.length > 0) {
      throw new Error(`Unknown deck id(s): ${unknownDeckIds.join(", ")}`);
    }

    await mkdir(options.outDir, { recursive: true });
    const exportImages =
      options.format === "all" || options.format === "images";
    const exportPdf = options.format === "all" || options.format === "pdf";

    for (const deckId of selectedDeckIds) {
      await page.goto(`${baseUrl}/decks/${deckId}/?slide=1`, {
        waitUntil: "networkidle",
      });
      await page.evaluate(() => document.fonts.ready);
      const slideCount = await getSlideCount(page);

      const deckOutDir = join(options.outDir, deckId);
      const imageDir = exportImages
        ? join(deckOutDir, "images")
        : join(tmpDir, deckId, "images");
      const pdfPath = join(deckOutDir, `${deckId}.pdf`);

      if (exportImages || exportPdf) {
        const imagePaths = await captureSlides({
          page,
          baseUrl,
          deckId,
          slideCount,
          imageDir,
          force: options.force,
        });

        if (exportPdf) {
          await mkdir(deckOutDir, { recursive: true });
          await writePdf({
            page,
            pdfPath,
            imagePaths,
            force: options.force,
          });
        }

        if (!exportImages) {
          await rm(join(tmpDir, deckId), { recursive: true, force: true });
        }
      }

      console.log(
        `${deckId}: ${slideCount} slide(s) exported to ${relative(process.cwd(), deckOutDir)}`,
      );
    }

    await writeFile(
      join(options.outDir, "manifest.json"),
      `${JSON.stringify(
        {
          exportedAt: new Date().toISOString(),
          format: options.format,
          force: options.force,
          decks: selectedDeckIds,
        },
        null,
        2,
      )}\n`,
    );
  } finally {
    if (browser) await browser.close();
    await new Promise((resolveClose) => server.close(resolveClose));
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
