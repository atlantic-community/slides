import { type CSSProperties, type ReactNode } from "react";

import { colors, fonts } from "./tokens";

export interface SlideTextProps {
  children: ReactNode;
  /** sm 16px / md 20px / lg 26px. */
  size?: "sm" | "md" | "lg";
  bold?: boolean;
  /** Render in the muted grey tone. */
  muted?: boolean;
  style?: CSSProperties;
}

const FONT_SIZES: Record<NonNullable<SlideTextProps["size"]>, number> = {
  sm: 16,
  md: 20,
  lg: 26,
};

/**
 * Body copy for slides.
 */
export function SlideText({
  children,
  size = "md",
  bold = false,
  muted = false,
  style,
}: SlideTextProps) {
  return (
    <p
      style={{
        fontFamily: fonts.sans,
        fontSize: FONT_SIZES[size],
        fontWeight: bold ? 700 : 400,
        lineHeight: 1.5,
        margin: 0,
        ...(muted ? { color: colors.muted } : null),
        ...style,
      }}
    >
      {children}
    </p>
  );
}
