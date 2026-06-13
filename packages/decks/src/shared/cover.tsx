import { type ReactNode } from "react";

import { CoverSlide } from "@atlantic-community-slides/ui/layouts/cover-slide";

export interface BrandCoverOptions {
  key?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  location?: string;
  email?: string;
}

/**
 * Standard brand cover, reusable across decks. Wraps `CoverSlide` with the
 * shared "Dossier" meta block convention.
 */
export function brandCover({
  key = "cover",
  title,
  subtitle,
  location,
  email,
}: BrandCoverOptions): ReactNode {
  return (
    <CoverSlide
      key={key}
      title={title}
      subtitle={subtitle}
      metaLabel="Dossier"
      metaLines={location ? [location] : undefined}
      email={email}
    />
  );
}
