import { type CSSProperties, type ReactNode } from "react";

import { colors, fonts, type, weights } from "./tokens";

export interface SlideLinkProps {
  href: string;
  /** Defaults to rendering the href itself. */
  children?: ReactNode;
  /**
   * "blue" (default) for inline links on the dark canvas; "white" for hero
   * links (cover / big-title) where the blue would compete with the title.
   */
  tone?: "blue" | "white";
  style?: CSSProperties;
}

/**
 * Bold underlined link. Blue on content slides, white on hero slides.
 */
export function SlideLink({
  href,
  children,
  tone = "blue",
  style,
}: SlideLinkProps) {
  return (
    <a
      href={href}
      style={{
        fontFamily: fonts.sans,
        fontSize: type.caption + 2,
        fontWeight: weights.bold,
        color: tone === "white" ? colors.foreground : colors.link,
        textDecoration: "underline",
        textDecorationThickness: 2,
        textUnderlineOffset: 3,
        ...style,
      }}
    >
      {children ?? href}
    </a>
  );
}
