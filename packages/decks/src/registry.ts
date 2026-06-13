import { type Deck } from "./types";
import { mockDesignSystemDeck } from "./decks/mock-design-system";

export type { Deck, DeckMeta } from "./types";

/** All decks, in display order. Add new decks here. */
export const decks: Deck[] = [mockDesignSystemDeck];

export function getDeck(id: string): Deck | undefined {
  return decks.find((deck) => deck.meta.id === id);
}
