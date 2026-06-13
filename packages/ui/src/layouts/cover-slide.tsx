import { type ReactNode } from "react";

import { MetaBlock } from "../components/meta-block";
import { Slide } from "../components/slide";
import { SlideText } from "../components/slide-text";
import { SlideTitle } from "../components/slide-title";

export interface CoverSlideProps {
  title: ReactNode;
  subtitle?: ReactNode;
  metaLabel?: string;
  metaLines?: string[];
  email?: string;
}

/**
 * Opening slide: a huge mono title in the upper-left area, an optional
 * sans subtitle below it, and a meta block (label / lines / email) pinned
 * toward the bottom-left. No brand mark — the title is the brand.
 */
export function CoverSlide({
  title,
  subtitle,
  metaLabel,
  metaLines,
  email,
}: CoverSlideProps) {
  const hasMeta = Boolean(metaLabel || metaLines?.length || email);

  return (
    <Slide brand={false}>
      <SlideTitle
        key="title"
        size="xl"
        mono
        style={{ marginTop: 106, maxWidth: "75%" }}
      >
        {title}
      </SlideTitle>
      {subtitle ? (
        <SlideText key="subtitle" size="md" style={{ marginTop: 36 }}>
          {subtitle}
        </SlideText>
      ) : null}
      {hasMeta ? (
        <MetaBlock
          key="meta"
          label={metaLabel}
          lines={metaLines}
          email={email}
          style={{ marginTop: "auto" }}
        />
      ) : null}
    </Slide>
  );
}
