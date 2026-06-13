import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideTitle } from "../components/slide-title";
import { LogoGrid } from "../components/logo-grid";
import { colors, slide, space } from "../components/tokens";

export interface LogoWallSlideProps {
  title: ReactNode;
  logos: { src: string; alt: string }[];
  /** Number of columns in the logo grid (defaults to a near-square layout). */
  columns?: number;
}

/**
 * Logo wall slide: black header band carrying the brand mark + title, with a
 * white content area below filled by a tidy grid of partner/sponsor logos.
 */
export function LogoWallSlide({ title, logos, columns }: LogoWallSlideProps) {
  const cols =
    columns ?? (logos.length <= 6 ? 3 : Math.ceil(Math.sqrt(logos.length)));
  return (
    <Slide padded={false}>
      <header
        style={{
          height: 232,
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-end",
          boxSizing: "border-box",
          paddingLeft: slide.padding,
          paddingRight: slide.padding,
          paddingBottom: space["2xl"],
          backgroundColor: colors.background,
        }}
      >
        <SlideTitle size="md">{title}</SlideTitle>
      </header>
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
          padding: `${space.xl}px ${slide.padding}px`,
          backgroundColor: colors.inverseBackground,
          color: colors.inverseForeground,
        }}
      >
        <LogoGrid
          logos={logos}
          columns={cols}
          gap={space.xl}
          cellHeight={124}
          logoHeight={84}
        />
      </div>
    </Slide>
  );
}
