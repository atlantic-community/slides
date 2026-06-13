import { type ReactNode } from "react";

import { PeopleGrid } from "../components/people-grid";
import { Slide } from "../components/slide";
import { SlideText } from "../components/slide-text";
import { SlideTitle } from "../components/slide-title";
import { colors } from "../components/tokens";

export interface PeopleSlideProps {
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  people: { name: string; src: string }[];
  /** Explicit people-per-row for the avatar cluster, e.g. [2, 3, 2]. */
  rows?: number[];
}

/**
 * "Who we are" style slide (example 002): section title on top, a lead
 * line plus body copy on the left, and a grid of circular avatars on
 * the right.
 */
export function PeopleSlide({
  title,
  lead,
  children,
  people,
  rows,
}: PeopleSlideProps) {
  return (
    <Slide>
      <SlideTitle size="md" style={{ marginTop: 48 }}>
        {title}
      </SlideTitle>
      <div
        style={{
          display: "flex",
          gap: 48,
          marginTop: 28,
          flex: 1,
          minHeight: 0,
          alignItems: "center",
        }}
      >
        <div
          style={{
            flexBasis: "44%",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {lead ? (
            <SlideText size="sm" bold>
              {lead}
            </SlideText>
          ) : null}
          {children}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            width: 1,
            backgroundColor: colors.border,
            flexShrink: 0,
          }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PeopleGrid people={people} rows={rows} avatarSize={84} />
        </div>
      </div>
    </Slide>
  );
}
