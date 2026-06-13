import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideTitle } from "../components/slide-title";

export interface BigTitleSlideProps {
  title: ReactNode;
  footer?: ReactNode;
}

/**
 * Statement slide: a large sans-serif title in the upper-left area and an
 * optional footer (typically a SlideLink) pinned near the bottom.
 */
export function BigTitleSlide({ title, footer }: BigTitleSlideProps) {
  return (
    <Slide>
      <SlideTitle
        size="lg"
        style={{ marginTop: 110, marginLeft: 40, maxWidth: "58%" }}
      >
        {title}
      </SlideTitle>
      {footer ? (
        <div style={{ marginTop: "auto", marginBottom: 72, marginLeft: 40 }}>
          {footer}
        </div>
      ) : null}
    </Slide>
  );
}
