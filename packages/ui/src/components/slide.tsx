import { type CSSProperties, type ReactNode } from "react";

import { BrandMark } from "./brand-mark";
import { colors, fonts, slide } from "./tokens";

export interface SlideProps {
  children: ReactNode;
  /** Show the brand mark in the top-left corner. */
  brand?: boolean;
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
      {brand ? <BrandMark inverse={inverse} /> : null}
      {children}
    </section>
  );
}
