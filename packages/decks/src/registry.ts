import { atlanticCommunity } from "./decks/atlantic-community";
import { type Deck } from "./types";

export type { Deck, DeckMeta } from "./types";

/** All decks, in display order. Add new decks here. */
export const decks: Deck[] = [atlanticCommunity];

export function getDeck(id: string): Deck | undefined {
  return decks.find((deck) => deck.meta.id === id);
}
