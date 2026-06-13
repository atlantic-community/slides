# @repo/decks

Slide decks for the player app, composed from `@repo/ui` layouts.

- `src/types.ts` — `Deck` / `DeckMeta`.
- `src/decks/<id>.tsx` — one deck per file (`{ meta, slides }`).
- `src/shared/` — reusable slide builders (e.g. `brandCover`, `contactClosing`) shared across decks.
- `src/registry.ts` — `decks` array + `getDeck(id)`; add new decks here.

Consumed via `@repo/decks` (registry + types) and `@repo/decks/types`.
