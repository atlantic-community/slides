import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideTitle } from "../components/slide-title";

export interface TitleBodySlideProps {
  title: ReactNode;
  children: ReactNode;
}

/**
 * Standard content slide: section title at the top with a left-aligned
 * column of body text underneath (example 008 without the photo).
 */
export function TitleBodySlide({ title, children }: TitleBodySlideProps) {
  return (
    <Slide>
      <SlideTitle size="md" style={{ marginTop: 48 }}>
        {title}
      </SlideTitle>
      <div
        style={{
          marginTop: 40,
          maxWidth: 640,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {children}
      </div>
    </Slide>
  );
}
