import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideTitle } from "../components/slide-title";

export interface StatementSlideProps {
  children: ReactNode;
}

/**
 * A single bold statement, perfectly centered on both axes.
 * Mirrors example slide 010 ("Queremos ir al siguiente nivel").
 */
export function StatementSlide({ children }: StatementSlideProps) {
  return (
    <Slide>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SlideTitle size="lg" style={{ textAlign: "center", maxWidth: "85%" }}>
          {children}
        </SlideTitle>
      </div>
    </Slide>
  );
}
