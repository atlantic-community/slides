/**
 * Deterministic SVG data-URI placeholders for stories and screenshot tests.
 * No network access, so screenshots are stable.
 */

const PHOTO_TONES = [
  ["#1a1f2e", "#2d1f3a"],
  ["#16241c", "#1f3a2d"],
  ["#241a16", "#3a2d1f"],
  ["#161e24", "#1f2d3a"],
] as const;

const AVATAR_TONES = [
  "#4a5568",
  "#6b4a68",
  "#4a684f",
  "#68584a",
  "#4a5a68",
  "#684a4a",
] as const;

function svgUri(svg: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/** Dark photo-like placeholder that mimics venue/crowd shots. */
export function photoPlaceholder(seed = 0, width = 800, height = 500): string {
  const tone = PHOTO_TONES[seed % PHOTO_TONES.length] ?? PHOTO_TONES[0];
  const dots = Array.from({ length: 24 }, (_, i) => {
    const x = ((seed * 7 + i * 37) % 100) * (width / 100);
    const y = height * 0.55 + ((seed * 13 + i * 23) % 40) * (height / 100);
    const r = 3 + ((seed + i) % 4);
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" opacity="0.25"/>`;
  }).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${tone[0]}"/><stop offset="1" stop-color="${tone[1]}"/></linearGradient></defs><rect width="${width}" height="${height}" fill="url(#g)"/><rect y="${height * 0.45}" width="${width}" height="${height * 0.55}" fill="#000000" opacity="0.3"/>${dots}</svg>`;
  return svgUri(svg);
}

/** Circular-friendly avatar placeholder with initials. */
export function avatarPlaceholder(initials: string, seed = 0): string {
  const bg = AVATAR_TONES[seed % AVATAR_TONES.length] ?? AVATAR_TONES[0];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="${bg}"/><circle cx="100" cy="78" r="34" fill="#ffffff" opacity="0.55"/><ellipse cx="100" cy="160" rx="58" ry="38" fill="#ffffff" opacity="0.55"/><text x="100" y="112" font-family="Menlo, monospace" font-size="44" font-weight="bold" fill="#ffffff" text-anchor="middle">${initials}</text></svg>`;
  return svgUri(svg);
}

const LOGO_TONES = [
  "#1a1a1a",
  "#b91c1c",
  "#1d4ed8",
  "#15803d",
  "#7e22ce",
  "#0891b2",
] as const;

/**
 * Transparent-background wordmark placeholder, sized to its text so it
 * `contain`-fits cleanly inside a LogoGrid tile. Some seeds get a small mark
 * to mimic the variety of a real logo wall.
 */
export function logoPlaceholder(name: string, seed = 0): string {
  const fill = LOGO_TONES[seed % LOGO_TONES.length] ?? LOGO_TONES[0];
  const fontSize = 34;
  // Generous per-char estimate so bold caps never clip the viewBox (the tile
  // contain-fits the result, so extra width just adds side breathing room).
  const textWidth = Math.max(name.length * fontSize * 0.74, 60);
  const hasMark = seed % 3 !== 0;
  const markSize = 40;
  const gap = 16;
  const padX = 8;
  const markW = hasMark ? markSize + gap : 0;
  const width = Math.ceil(textWidth + markW + padX * 2);
  const height = 64;
  const cy = height / 2;
  let mark = "";
  if (hasMark) {
    const mx = padX;
    const my = cy - markSize / 2;
    const shape = seed % 3;
    if (shape === 1) {
      mark = `<circle cx="${mx + markSize / 2}" cy="${cy}" r="${markSize / 2}" fill="${fill}"/>`;
    } else {
      mark = `<rect x="${mx}" y="${my}" width="${markSize}" height="${markSize}" rx="8" fill="${fill}"/>`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${mark}<text x="${padX + markW}" y="${cy}" dominant-baseline="central" font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="${fill}">${name}</text></svg>`;
  return svgUri(svg);
}
