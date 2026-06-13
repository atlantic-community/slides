import { type CSSProperties } from "react";

import { colors, radii } from "./tokens";

export interface LogoGridProps {
  logos: { src: string; alt: string }[];
  columns?: number;
  gap?: number;
  /** Max height of each logo. */
  logoHeight?: number;
  /** Height of each grid cell (controls vertical rhythm / alignment). */
  cellHeight?: number;
  /**
   * Wrap each logo in a subtle bordered tile. Off by default — logos sit
   * directly on the surface, as on a classic "trusted by" wall. Turn on for
   * busy backgrounds where logos need a container to read.
   */
  framed?: boolean;
  /** Flip framed-tile colours for use on the dark canvas. */
  onDark?: boolean;
  style?: CSSProperties;
}

/**
 * Logo wall. Logos are normalised to a common height and centred in a uniform
 * grid so a heterogeneous set of marks reads as a tidy row-and-column field.
 */
export function LogoGrid({
  logos,
  columns = 4,
  gap = 24,
  logoHeight = 52,
  cellHeight = 120,
  framed = false,
  onDark = false,
  style,
}: LogoGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        width: "100%",
        ...style,
      }}
    >
      {logos.map((logo, index) => (
        <div
          key={`${logo.alt}-${index}`}
          style={{
            height: cellHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: framed ? 20 : 8,
            boxSizing: "border-box",
            ...(framed
              ? {
                  borderRadius: radii.md,
                  backgroundColor: onDark
                    ? colors.surface
                    : colors.inverseSurface,
                  border: `1px solid ${onDark ? colors.border : colors.inverseBorder}`,
                }
              : null),
          }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            style={{
              display: "block",
              maxHeight: logoHeight,
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      ))}
    </div>
  );
}
