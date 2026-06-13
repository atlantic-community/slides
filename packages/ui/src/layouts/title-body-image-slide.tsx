import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideImage } from "../components/slide-image";
import { SlideTitle } from "../components/slide-title";

export interface TitleBodyImageSlideProps {
  title: ReactNode;
  children: ReactNode;
  image: { src: string; alt: string };
}

/**
 * Title at the top, body paragraphs on the left (~48%) and a large
 * rounded photo on the right, vertically centered.
 */
export function TitleBodyImageSlide({
  title,
  children,
  image,
}: TitleBodyImageSlideProps) {
  return (
    <Slide>
      <SlideTitle size="md" style={{ marginTop: 48 }}>
        {title}
      </SlideTitle>
      <div
        style={{
          display: "flex",
          gap: 56,
          marginTop: 36,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            flexBasis: "46%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {children}
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <SlideImage
            src={image.src}
            alt={image.alt}
            width="100%"
            height="100%"
            style={{ maxHeight: 480 }}
          />
        </div>
      </div>
    </Slide>
  );
}
