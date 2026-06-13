import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideImage } from "../components/slide-image";
import { SlideText } from "../components/slide-text";
import { SlideTitle } from "../components/slide-title";
import { colors, space, type, weights } from "../components/tokens";

export interface ThreeColumnColumn {
  heading: ReactNode;
  link?: ReactNode;
  /** Bold key figures, can be multiple lines. */
  stats?: ReactNode;
  body?: ReactNode;
  /** Photo anchored to the bottom of the column. */
  image?: { src: string; alt: string };
}

export interface ThreeColumnSlideProps {
  title: ReactNode;
  columns: ThreeColumnColumn[];
}

/**
 * Title plus three equal columns, each with a heading, optional link, bold
 * stats, body copy and a photo anchored at the bottom (example slide 003).
 * Hairline dividers in the gutters reinforce the column structure.
 */
export function ThreeColumnSlide({ title, columns }: ThreeColumnSlideProps) {
  return (
    <Slide>
      <SlideTitle size="md" style={{ marginTop: 44 }}>
        {title}
      </SlideTitle>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
          gap: space["2xl"],
          marginTop: 40,
          flex: 1,
          minHeight: 0,
        }}
      >
        {columns.map((column, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              ...(i > 0
                ? {
                    borderLeft: `1px solid ${colors.border}`,
                    paddingLeft: space["2xl"],
                  }
                : null),
            }}
          >
            <div
              style={{
                fontSize: type.heading,
                fontWeight: weights.bold,
                lineHeight: 1.2,
              }}
            >
              {column.heading}
            </div>
            {column.link ? (
              <div style={{ marginTop: space.xs }}>{column.link}</div>
            ) : null}
            {column.stats ? (
              <div
                style={{
                  marginTop: space.md,
                  fontSize: type.caption,
                  fontWeight: weights.bold,
                  lineHeight: 1.5,
                }}
              >
                {column.stats}
              </div>
            ) : null}
            {column.body ? (
              <SlideText size="sm" muted style={{ marginTop: space.sm }}>
                {column.body}
              </SlideText>
            ) : null}
            {column.image ? (
              <SlideImage
                src={column.image.src}
                alt={column.image.alt}
                width="100%"
                height={236}
                style={{ marginTop: "auto" }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </Slide>
  );
}
