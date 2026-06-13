# @atlantic-community-slides/decks

Slide decks for the player app. **Decks are authored in code (TSX) — there is no
deck-builder UI.** You (usually an agent) add a deck by writing a module here and
registering it; the player app then lists and presents it. Each deck composes the
ready-made slide layouts from `@atlantic-community-slides/ui` — you supply content as props, the
layouts own all positioning and styling.

## Anatomy

A deck is `{ meta, slides }` (`src/types.ts`):

```ts
interface DeckMeta {
  id: string; // URL-safe, also the route segment (/decks/<id>)
  title: string;
  subtitle?: string;
  date: string; // display string, e.g. "June 2026"
}
interface Deck {
  meta: DeckMeta;
  slides: ReactNode[]; // each entry is a @atlantic-community-slides/ui layout element
}
```

## Create a new deck (3 steps)

1. **Add `src/decks/<id>.tsx`** exporting a `Deck`:

   ```tsx
   import { StatementSlide } from "@atlantic-community-slides/ui/layouts/statement-slide";
   import { TitleBodySlide } from "@atlantic-community-slides/ui/layouts/title-body-slide";
   import { SlideText } from "@atlantic-community-slides/ui/components/slide-text";
   import { brandCover } from "../shared/cover";
   import { type Deck } from "../types";

   export const myDeck: Deck = {
     meta: { id: "my-deck", title: "My Deck", date: "June 2026" },
     slides: [
       brandCover({ title: "My Deck", subtitle: "A subtitle", email: "x@y.z" }),
       <TitleBodySlide key="intro" title="What we do">
         <SlideText size="md">First paragraph.</SlideText>
         <SlideText size="md" muted>
           A secondary, muted paragraph.
         </SlideText>
       </TitleBodySlide>,
       <StatementSlide key="punch">One bold idea.</StatementSlide>,
     ],
   };
   ```

2. **Register it** in `src/registry.ts` — add to the `decks` array:

   ```ts
   import { myDeck } from "./decks/my-deck";
   export const decks: Deck[] = [atlanticCommunity, myDeck];
   ```

3. **Verify** (see below). It now appears on the player index automatically.

Notes:

- Slides render one at a time, so React `key`s are optional, but add them on
  inline JSX slides for clarity.
- Don't restyle layouts inline in a deck. If you need a structure no layout
  provides, add a new layout in `@atlantic-community-slides/ui/src/layouts/` (see the root
  `AGENTS.md`) and use it — keep decks to content only.

## Reuse slides across decks

Put reusable slides in `src/shared/` as **functions that return a slide**, then
import and call them from any deck. This is how a standard cover or closing slide
stays identical across decks:

```tsx
// src/shared/cover.tsx
export function brandCover(opts): ReactNode {
  return <CoverSlide title={opts.title} metaLabel="Dossier" .../>;
}
```

```tsx
// in any deck
import { brandCover } from "../shared/cover";
import { contactClosing } from "../shared/closing";
slides: [brandCover({ ... }), /* ... */, contactClosing({ ... })];
```

Existing shared builders: `brandCover` (opening cover), `contactClosing`
(closing slide with a contact link). Add more as patterns recur.

## Images

Layouts that take images accept `{ src, alt }`. Use real assets (imported files
or URLs) in production. For drafts, use the deterministic SVG placeholder helpers
from `@atlantic-community-slides/ui/components/placeholders`:

- `photoPlaceholder(seed?, width?, height?)` — dark photo-like fill
- `avatarPlaceholder(initials, seed?)` — circular avatar
- `logoPlaceholder(name, seed?)` — transparent wordmark for logo walls

## Layout catalog

Import each from `@atlantic-community-slides/ui/layouts/<file>`. Supply content via props; layouts
handle the brand mark, 1280×720 frame, and all styling.

| File                           | Component                  | Required props                  | Optional props                                  | Use for                                   |
| ------------------------------ | -------------------------- | ------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| `cover-slide`                  | `CoverSlide`               | `title`                         | `subtitle`, `metaLabel`, `metaLines[]`, `email` | Opening cover (mono title), no brand mark |
| `big-title-slide`              | `BigTitleSlide`            | `title`                         | `footer`                                        | Section divider / closing with a link     |
| `statement-slide`              | `StatementSlide`           | `children`                      | —                                               | One bold statement, centered              |
| `title-body-slide`             | `TitleBodySlide`           | `title`, `children`             | —                                               | Title + body paragraphs                   |
| `title-body-image-slide`       | `TitleBodyImageSlide`      | `title`, `children`, `image`    | —                                               | Body left, one photo right                |
| `title-body-image-stack-slide` | `TitleBodyImageStackSlide` | `title`, `children`, `images[]` | `link`                                          | Body left, two stacked photos right       |
| `side-by-side-slide`           | `SideBySideSlide`          | `title`, `right`                | `body`, `rightInverse`                          | Text left, panel right (e.g. logo wall)   |
| `three-column-slide`           | `ThreeColumnSlide`         | `title`, `columns[]`            | —                                               | Three columns (heading/stats/body/photo)  |
| `big-stat-slide`               | `BigStatSlide`             | `value`                         | `label`, `context`                              | One hero number                           |
| `people-slide`                 | `PeopleSlide`              | `title`, `people[]`             | `lead`, `children`, `rows[]`                    | Team / speakers with avatars              |
| `logo-wall-slide`              | `LogoWallSlide`            | `title`, `logos[]`              | `columns`                                       | Partner / sponsor logo grid               |

Shapes:

- `image`: `{ src: string; alt: string }`; `images`/`logos`: arrays of the same.
- `people`: `{ name: string; src: string }[]`; `rows` (e.g. `[2,3,2]`) lays the
  avatars out in centred rows instead of an even grid.
- `columns` (three-column): `{ heading, link?, stats?, body?, image? }[]`.

## Content components

For props that take rich content, compose these from
`@atlantic-community-slides/ui/components/<file>` (every component exports its `*Props` interface):

- `slide-text` → `SlideText` `{ children, size?: "sm"|"md"|"lg", bold?, muted? }`
- `slide-link` → `SlideLink` `{ href, children?, tone?: "blue"|"white" }` — use
  `tone="white"` on dark hero slides (cover/big-title), blue elsewhere.
- `logo-grid` → `LogoGrid` `{ logos, columns?, gap?, logoHeight?, cellHeight?, framed?, onDark? }`
- Also available: `people-grid`, `image-grid`, `slide-image`, `stat`,
  `meta-block`, `slide-title`. Read the source / `Foundations/Design Tokens` and
  `Components/*` stories in Storybook (`pnpm storybook`).

## Verify

```bash
pnpm --filter @atlantic-community-slides/decks check-types   # types
pnpm --filter @atlantic-community-slides/decks test          # registry integrity + smoke-renders every slide
pnpm dev                                # play it at http://localhost:3000
```

The test suite renders every slide of every registered deck, so a deck that
throws (bad props, missing import) fails fast.
