/**
 * Boots the built player app and captures key chrome states to screenshots/
 * (gitignored) for visual review / multi-model roasting.
 *
 * Usage: pnpm build && node scripts/shots.mjs
 */
import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const root = fileURLToPath(new URL("..", import.meta.url));
const outDir = join(root, "screenshots");
const PORT = 4321;
const base = `http://127.0.0.1:${PORT}`;

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server did not start at ${url}`);
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

const server = spawn("pnpm", ["exec", "next", "start", "-p", String(PORT)], {
  cwd: root,
  stdio: "ignore",
});

let browser;
try {
  await waitForServer(base);
  browser = await chromium.launch();

  // Index — desktop
  const index = await browser.newPage({
    viewport: { width: 1280, height: 832 },
  });
  await index.goto(`${base}/`, { waitUntil: "networkidle" });
  await index.evaluate(() => document.fonts.ready);
  await index.waitForTimeout(250);
  await index.screenshot({ path: join(outDir, "index.png") });

  // Index — narrow / mobile
  const narrow = await browser.newPage({
    viewport: { width: 480, height: 900 },
  });
  await narrow.goto(`${base}/`, { waitUntil: "networkidle" });
  await narrow.evaluate(() => document.fonts.ready);
  await narrow.waitForTimeout(250);
  await narrow.screenshot({ path: join(outDir, "index-narrow.png") });

  // Player — controls visible (first slide)
  const player = await browser.newPage({
    viewport: { width: 1280, height: 720 },
  });
  await player.goto(`${base}/decks/atlantic-community`, {
    waitUntil: "networkidle",
  });
  await player.evaluate(() => document.fonts.ready);
  await player.mouse.move(640, 360);
  await player.waitForTimeout(300);
  await player.screenshot({ path: join(outDir, "player-controls.png") });

  // Player — a mid content slide (deep link), controls visible
  const mid = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await mid.goto(`${base}/decks/atlantic-community?slide=4`, {
    waitUntil: "networkidle",
  });
  await mid.evaluate(() => document.fonts.ready);
  await mid.mouse.move(640, 360);
  await mid.waitForTimeout(300);
  await mid.screenshot({ path: join(outDir, "player-mid.png") });

  // Player — controls idle/hidden (no pointer movement)
  const idle = await browser.newPage({
    viewport: { width: 1280, height: 720 },
  });
  await idle.goto(`${base}/decks/atlantic-community`, {
    waitUntil: "networkidle",
  });
  await idle.evaluate(() => document.fonts.ready);
  await idle.waitForTimeout(3200);
  await idle.screenshot({ path: join(outDir, "player-idle.png") });

  console.log(`Screenshots written to ${outDir}`);
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}
