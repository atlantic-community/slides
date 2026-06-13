import { type ReactNode } from "react";

import { BigTitleSlide } from "@atlantic-community-slides/ui/layouts/big-title-slide";
import { SlideLink } from "@atlantic-community-slides/ui/components/slide-link";

export interface ContactClosingOptions {
  title: ReactNode;
  email: string;
}

/**
 * Standard closing slide with a contact link, reusable across decks.
 */
export function contactClosing({
  title,
  email,
}: ContactClosingOptions): ReactNode {
  return (
    <BigTitleSlide
      title={title}
      footer={
        <SlideLink href={`mailto:${email}`} tone="white">
          {email}
        </SlideLink>
      }
    />
  );
}
