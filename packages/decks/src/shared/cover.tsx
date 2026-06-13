import { type ReactNode } from "react";

import { CoverSlide } from "@repo/ui/layouts/cover-slide";

export interface BrandCoverOptions {
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
  title,
  subtitle,
  location,
  email,
}: BrandCoverOptions): ReactNode {
  return (
    <CoverSlide
      title={title}
      subtitle={subtitle}
      metaLabel="Dossier"
      metaLines={location ? [location] : undefined}
      email={email}
    />
  );
}
