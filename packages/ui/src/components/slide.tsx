import { type CSSProperties, type ReactNode } from "react";

import { BrandMark, type BrandMarkPosition } from "./brand-mark";
import { colors, fonts, slide } from "./tokens";

export interface SlideProps {
  children: ReactNode;
  /** Show the brand mark. Can be a boolean or a specific position. */
  brand?: boolean | BrandMarkPosition;
  /** White background with black text instead of the default black/white. */
  inverse?: boolean;
  /** Apply the standard 64px slide padding. Disable for full-bleed layouts. */
  padded?: boolean;
  style?: CSSProperties;
}

/**
 * Fixed 1280x720 (16:9) slide frame. All slide layouts render inside this.
 */
export function Slide({
  children,
  brand = true,
  inverse = false,
  padded = true,
  style,
}: SlideProps) {
  return (
    <section
      style={{
        position: "relative",
        width: slide.width,
        height: slide.height,
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: inverse ? colors.inverseBackground : colors.background,
        color: inverse ? colors.inverseForeground : colors.foreground,
        fontFamily: fonts.sans,
        padding: padded ? slide.padding : 0,
        ...style,
      }}
    >
      {brand ? (
        <BrandMark
          inverse={inverse}
          position={typeof brand === "string" ? brand : undefined}
        />
      ) : null}
      {children}
    </section>
  );
}
