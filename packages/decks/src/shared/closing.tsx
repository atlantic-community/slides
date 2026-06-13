import { type ReactNode } from "react";

import { BigTitleSlide } from "@atlantic-community-slides/ui/layouts/big-title-slide";
import { SlideLink } from "@atlantic-community-slides/ui/components/slide-link";

export interface ContactClosingOptions {
  key?: string;
  title: ReactNode;
  email: string;
}

/**
 * Standard closing slide with a contact link, reusable across decks.
 */
export function contactClosing({
  key = "closing",
  title,
  email,
}: ContactClosingOptions): ReactNode {
  return (
    <BigTitleSlide
      key={key}
      title={title}
      footer={
        <SlideLink href={`mailto:${email}`} tone="white">
          {email}
        </SlideLink>
      }
    />
  );
}
