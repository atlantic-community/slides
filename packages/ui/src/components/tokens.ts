/**
 * Design tokens for the Atlantic Community slide system.
 *
 * The whole system is intentionally monochrome — black canvas, white ink, one
 * blue for links — so hierarchy is carried by scale and weight, not colour.
 * Every component pulls from these tokens; nothing hard-codes a raw value.
 */

/** Canvas geometry. Slides are a fixed 16:9 surface. */
export const slide = {
  width: 1280,
  height: 720,
  /** Outer safe-area margin used by padded layouts. */
  padding: 64,
} as const;

export const colors = {
  background: "#000000",
  foreground: "#ffffff",
  /** Secondary body copy on the dark canvas. */
  muted: "#b3b3b3",
  /** Tertiary / fine print on the dark canvas. */
  subtle: "#7a7a7a",
  link: "#6db3ff",
  /** Hairline borders / surfaces on the dark canvas. */
  border: "rgba(255, 255, 255, 0.14)",
  surface: "rgba(255, 255, 255, 0.04)",

  /** Inverse (paper) surfaces, e.g. logo walls. */
  inverseBackground: "#ffffff",
  inverseForeground: "#0a0a0a",
  inverseMuted: "#5c5c5c",
  inverseBorder: "rgba(0, 0, 0, 0.10)",
  inverseSurface: "rgba(0, 0, 0, 0.025)",
} as const;

export const fonts = {
  mono: "'IBM Plex Mono', 'SF Mono', Menlo, Consolas, monospace",
  sans: "'IBM Plex Sans', system-ui, 'Helvetica Neue', Arial, sans-serif",
} as const;

export const weights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Type scale (px). Each name maps to a concrete role on a slide so usage stays
 * consistent across components.
 */
export const type = {
  display: 92, // cover title (mono)
  title: 64, // hero / statement title
  section: 44, // section title
  heading: 24, // column + sub headings
  lead: 26, // emphasised intro copy
  body: 20, // default body copy
  caption: 16, // dense body / fine print
  brand: 14, // brand mark + eyebrows
} as const;

/** Spacing scale (px) — used for gaps, margins and padding. */
export const space = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
} as const;

/** Corner radii (px). */
export const radii = {
  sm: 6,
  md: 8,
  lg: 12,
  pill: 999,
} as const;

export type SpaceToken = keyof typeof space;
export type TypeToken = keyof typeof type;
