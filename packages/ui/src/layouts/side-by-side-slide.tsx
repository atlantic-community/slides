import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideTitle } from "../components/slide-title";
import { colors, slide } from "../components/tokens";

export interface SideBySideSlideProps {
  title: ReactNode;
  body?: ReactNode;
  right: ReactNode;
  /** Render the right half on a white background. */
  rightInverse?: boolean;
}

/**
 * Split slide: narrow black text column on the left, full-bleed content panel
 * on the right (white by default, e.g. for logo walls).
 */
export function SideBySideSlide({
  title,
  body,
  right,
  rightInverse = true,
}: SideBySideSlideProps) {
  return (
    <Slide padded={false} style={{ flexDirection: "row" }}>
      <div
        style={{
          width: "45%",
          height: "100%",
          boxSizing: "border-box",
          padding: slide.padding,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SlideTitle size="md" style={{ marginTop: 48 }}>
          {title}
        </SlideTitle>
        {body ? <div style={{ marginTop: 32 }}>{body}</div> : null}
      </div>
      <div
        style={{
          width: "55%",
          height: "100%",
          boxSizing: "border-box",
          padding: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: rightInverse
            ? colors.inverseBackground
            : colors.background,
          color: rightInverse ? colors.inverseForeground : colors.foreground,
        }}
      >
        {right}
      </div>
    </Slide>
  );
}
