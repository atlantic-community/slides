# @atlantic-community-slides/decks

Slide decks for the player app. **Decks are authored in code (TSX) — there is no
deck-builder UI.** You (usually an agent) add a deck by writing a module here and
registering it; the player app then lists and presents it. Each deck composes the
ready-made slide layouts from `@atlantic-community-slides/ui` — you supply content as props, the
layouts own all positioning and styling.
