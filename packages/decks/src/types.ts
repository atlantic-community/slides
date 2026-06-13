import { type ReactNode } from "react";

export interface DeckMeta {
  /** URL-safe identifier, also the route segment. */
  id: string;
  title: string;
  subtitle?: string;
  /** Display date, e.g. "June 2026". */
  date: string;
}

export interface Deck {
  meta: DeckMeta;
  /** Ordered slides; each is a `@atlantic-community-slides/ui` layout instance. */
  slides: ReactNode[];
}
