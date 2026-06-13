import { type ReactNode } from "react";

import { Slide } from "../components/slide";
import { SlideImage } from "../components/slide-image";
import { SlideTitle } from "../components/slide-title";

export interface TitleBodyImageStackSlideProps {
  title: ReactNode;
  link?: ReactNode;
  children: ReactNode;
  images: { src: string; alt: string }[];
}

/**
 * Title, optional link and body copy on the left (~50%), with two photos
 * stacked vertically on the right (~46%). Mirrors the event-pitch slides
 * in the example deck.
 */
export function TitleBodyImageStackSlide({
  title,
  link,
  children,
  images,
}: TitleBodyImageStackSlideProps) {
  return (
    <Slide>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            flexBasis: "50%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SlideTitle size="md" style={{ marginTop: 48 }}>
            {title}
          </SlideTitle>
          {link ? <div style={{ marginTop: 16 }}>{link}</div> : null}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginTop: 28,
            }}
          >
            {children}
          </div>
        </div>
        <div
          style={{
            flexBasis: "46%",
            flexShrink: 0,
            marginTop: 48,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {images.slice(0, 2).map((image) => (
            <div key={image.src} style={{ flex: 1, minHeight: 0 }}>
              <SlideImage
                src={image.src}
                alt={image.alt}
                width="100%"
                height="100%"
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
