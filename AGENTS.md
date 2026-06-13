# atlantic-makers-slides

Turborepo + pnpm monorepo: a React slide design system, the decks built from it, and a web app that presents them.

## Structure

- `packages/ui` — the component library (`@repo/ui`). Exports map: `@repo/ui/fonts`, `@repo/ui/components/<name>`, `@repo/ui/components/tokens`, `@repo/ui/components/placeholders`, `@repo/ui/layouts/<name>`, `@repo/ui/<file>`.
  - `src/components/` — slide design-system primitives + tokens (Slide frame, BrandMark, SlideTitle, SlideText, SlideLink, MetaBlock, Stat, SlideImage, ImageGrid, LogoGrid, PeopleGrid) plus `tokens.ts`, SVG `placeholders.ts`, and `fonts.ts` (shared `@fontsource` IBM Plex entry).
  - `src/layouts/` — full slide-layout templates (cover, big-title, statement, title-body, title-body-image, title-body-image-stack, side-by-side, three-column, big-stat, people, logo-wall) — the "PowerPoint template" layer.
  - `src/*.tsx` — the original scaffold components (button/card/code).
- `packages/decks` — deck content (`@repo/decks`): typed `Deck`s (`{ meta, slides[] }`) composed from `@repo/ui` layouts, reusable slide builders in `src/shared/`, and a `registry.ts` (`decks` + `getDeck`). Add a deck in `src/decks/<id>.tsx` and register it.
- `apps/player` — Next.js (App Router) presentation app: index page lists decks, `/decks/[id]` plays one. Runtime in `src/player/` (`SlideStage` scale-to-fit, `useDeckNav` keyboard + `?slide=N` deep-link, `Controls`, `Player`). Reuses `@repo/ui` + `@repo/decks` (via `transpilePackages`).
- `packages/eslint-config` — shared ESLint flat configs (`@repo/eslint-config`): `base`, `react-internal`, `next-js`.
- `packages/typescript-config` — shared tsconfig bases (`@repo/typescript-config`): `base`, `react-library`, `nextjs`.
- `examples/` — reference slide images (the design we match against), not part of the build.

## Commands (run from the repo root)

| Command                             | What it does                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------- |
| `pnpm dev`                          | Run all dev servers (the `player` app on http://localhost:3000)                       |
| `pnpm storybook`                    | Storybook dev server on http://localhost:6006                                         |
| `pnpm build`                        | Build all (the `player` app)                                                          |
| `pnpm build-storybook`              | Static Storybook build (`packages/ui/storybook-static`)                               |
| `pnpm test`                         | All vitest projects across workspaces (jsdom unit + Playwright/Chromium browser mode) |
| `pnpm lint`                         | ESLint, zero warnings allowed                                                         |
| `pnpm check-types`                  | `tsc --noEmit` per package                                                            |
| `pnpm format` / `pnpm format:check` | Prettier write / check                                                                |

All of these go through Turborepo and are cached; scope to one workspace with `pnpm --filter player <script>` / `pnpm turbo run test --filter=@repo/ui`, or run the script inside the directory.

Screenshot/roast scripts (output to gitignored `screenshots/`):

- `pnpm --filter @repo/ui screenshots` — builds Storybook and renders every `Components/*` / `Layouts/*` story to a 1280×720 PNG, for review against `examples/`.
- `pnpm --filter player shots` (after `pnpm --filter player build`) — boots the built app and captures the player/index chrome states.

## Conventions

- **Components**: one component per file in `packages/ui/src/`, lowercase filenames, named exports, props interfaces exported (needed so story metas can be typed).
- **Stories**: colocated `*.stories.tsx` next to the component, CSF3 with `satisfies Meta<typeof X>`. Stories double as browser tests via `@storybook/addon-vitest` — add a `play` function only when it proves behavior a plain render doesn't (interactions, async content, aria state).
- **Unit tests**: colocated `*.test.tsx`, vitest + Testing Library in jsdom. Use these for logic; use stories for rendering/interaction coverage.
- **Styling**: the slide system styles with inline style objects sourced from `src/components/tokens.ts` (colors, type scale, spacing, radii) — never hard-code raw values, pull from tokens. The system is monochrome (black canvas, white ink, one blue link); hierarchy comes from scale/weight. Fonts are self-hosted IBM Plex Mono/Sans via the shared `@repo/ui/fonts` entry — any consumer (Storybook preview, the player app's `app/layout.tsx`) imports it once. The original scaffold components (button/card/code) remain unstyled and accept `className`.
- **Player runtime** (`apps/player/src/player/`): client components; lowercase filenames; pure logic extracted for unit tests (`fitScale`, `clampIndex`, `readSlideFromUrl`). Navigation syncs to the URL via `history.replaceState` (no router dependency), so it is testable in vitest browser mode. No click-to-advance overlay — it would block links/videos in slides; navigate via keyboard + the controls bar.

## Slide design system

- **Frame**: every slide renders inside `<Slide>` — a fixed 1280×720 surface with the brand mark, `inverse` (paper) and `padded` options.
- **Layouts** compose components; they take content as props and own positioning. Match `examples/` for structure/proportion, not pixels.
- **Foundations**: `Foundations/Design Tokens` story documents colors, type scale, and spacing.
- **Review loop**: screenshot the UI (slides via the `@repo/ui` script against `examples/`; the player chrome via the `player` shots script, open critique with no reference), then get independent feedback from multiple models without context contamination: Claude (read the PNGs directly) and Gemini (`gemini --skip-trust -p "@gen.png <prompt>"` from a dir where the PNGs aren't gitignored, e.g. copied to `/tmp`). Codex is also available (`echo "<prompt>" | codex exec --skip-git-repo-check -s read-only -i gen.png ref.png` — `-i` is variadic, so pass the prompt via stdin). Fix issues 2+ models agree on; treat single-model scale complaints skeptically (they anchor to the references' higher pixel resolution).

## Tooling notes

- Pre-commit (Husky + lint-staged): Prettier on staged files, then `turbo run lint check-types`. Tests are not run on commit — run `pnpm test` yourself before pushing.
- The Storybook vitest project needs Playwright Chromium (`pnpm exec playwright install chromium` if browsers are missing).
- Adding deps: `pnpm add <pkg> --filter @repo/ui` (or `-Dw` for root tooling).

## Skills

Project-local agent skills live in `.agents/skills/` (tracked in `skills-lock.json`, managed with `npx skills`): `turborepo` (official Vercel), `vitest`, `storybook-story-writing`, and `react-testing-library`. Consult them when working in their respective areas.
