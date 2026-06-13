import { type CSSProperties, type ReactNode } from "react";

import { fonts } from "./tokens";

export interface SlideTitleProps {
  children: ReactNode;
  /** md 44px / lg 64px / xl 92px. */
  size?: "md" | "lg" | "xl";
  /** Use the mono stack (cover titles) instead of sans. */
  mono?: boolean;
  style?: CSSProperties;
}

const FONT_SIZES: Record<NonNullable<SlideTitleProps["size"]>, number> = {
  md: 44,
  lg: 64,
  xl: 92,
};

/**
 * Bold slide heading. Mono variant matches the cover slides.
 */
export function SlideTitle({
  children,
  size = "md",
  mono = false,
  style,
}: SlideTitleProps) {
  return (
    <h1
      style={{
        fontFamily: mono ? fonts.mono : fonts.sans,
        fontSize: FONT_SIZES[size],
        fontWeight: 700,
        lineHeight: 1.15,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </h1>
  );
}
