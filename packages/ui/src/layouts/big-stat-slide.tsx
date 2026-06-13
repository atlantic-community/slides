import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideText } from "../components/slide-text";
import { Stat } from "../components/stat";

export interface BigStatSlideProps {
  value: string;
  label?: ReactNode;
  context?: ReactNode;
}

/**
 * One huge number front and center, with an optional label and a short
 * muted context line below. Ideal for headline metrics in sponsor pitches.
 */
export function BigStatSlide({ value, label, context }: BigStatSlideProps) {
  return (
    <Slide>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Stat value={value} label={label as string | undefined} />
        {context ? (
          <SlideText
            muted
            style={{ maxWidth: "60%", textAlign: "center", marginTop: 24 }}
          >
            {context}
          </SlideText>
        ) : null}
      </div>
    </Slide>
  );
}
