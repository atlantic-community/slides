# atlantic-makers-slides

Turborepo + pnpm monorepo for a React component library. No apps yet — only packages.

## Structure

- `packages/ui` — the component library (`@repo/ui`). Exports map: `@repo/ui/<file>` (flat `src/`), `@repo/ui/components/<name>`, `@repo/ui/layouts/<name>`.
  - `src/components/` — slide design-system primitives + tokens (Slide frame, BrandMark, SlideTitle, SlideText, SlideLink, MetaBlock, Stat, SlideImage, ImageGrid, LogoGrid, PeopleGrid) plus `tokens.ts` and SVG `placeholders.ts`.
  - `src/layouts/` — full slide-layout templates (cover, big-title, statement, title-body, title-body-image, title-body-image-stack, side-by-side, three-column, big-stat, people, logo-wall) — the "PowerPoint template" layer.
  - `src/*.tsx` — the original scaffold components (button/card/code).
- `packages/eslint-config` — shared ESLint flat configs (`@repo/eslint-config`).
- `packages/typescript-config` — shared tsconfig bases (`@repo/typescript-config`).
- `examples/` — reference slide images (the design we match against), not part of the build.

## Commands (run from the repo root)

| Command                             | What it does                                                                                       |
| ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| `pnpm storybook`                    | Storybook dev server on http://localhost:6006                                                      |
| `pnpm build-storybook`              | Static Storybook build (`packages/ui/storybook-static`)                                            |
| `pnpm test`                         | All vitest projects: `unit` (jsdom) + `storybook` (Playwright/Chromium browser tests over stories) |
| `pnpm lint`                         | ESLint, zero warnings allowed                                                                      |
| `pnpm check-types`                  | `tsc --noEmit` per package                                                                         |
| `pnpm format` / `pnpm format:check` | Prettier write / check                                                                             |

All of these go through Turborepo and are cached; scope to one package with `pnpm turbo run test --filter=@repo/ui` or by running the script inside the package directory.

`pnpm --filter @repo/ui screenshots` builds Storybook and renders every `Components/*` and `Layouts/*` story to a 1280×720 PNG in `packages/ui/screenshots/` (gitignored) — the source for visual review against `examples/`.

## Conventions

- **Components**: one component per file in `packages/ui/src/`, lowercase filenames, named exports, props interfaces exported (needed so story metas can be typed).
- **Stories**: colocated `*.stories.tsx` next to the component, CSF3 with `satisfies Meta<typeof X>`. Stories double as browser tests via `@storybook/addon-vitest` — add a `play` function only when it proves behavior a plain render doesn't (interactions, async content, aria state).
- **Unit tests**: colocated `*.test.tsx`, vitest + Testing Library in jsdom. Use these for logic; use stories for rendering/interaction coverage.
- **Styling**: the slide system styles with inline style objects sourced from `src/components/tokens.ts` (colors, type scale, spacing, radii) — never hard-code raw values, pull from tokens. The system is monochrome (black canvas, white ink, one blue link); hierarchy comes from scale/weight. Fonts are self-hosted IBM Plex Mono/Sans, loaded in `.storybook/preview.tsx`. The original scaffold components (button/card/code) remain unstyled and accept `className`.

## Slide design system

- **Frame**: every slide renders inside `<Slide>` — a fixed 1280×720 surface with the brand mark, `inverse` (paper) and `padded` options.
- **Layouts** compose components; they take content as props and own positioning. Match `examples/` for structure/proportion, not pixels.
- **Foundations**: `Foundations/Design Tokens` story documents colors, type scale, and spacing.
- **Review loop**: build screenshots (above), then compare each layout to its `examples/` reference. Multiple models give independent feedback without context contamination: Claude (read the PNGs directly), Codex (`echo "<prompt>" | codex exec --skip-git-repo-check -s read-only -i gen.png ref.png` — `-i` is variadic so pass the prompt via stdin), and Gemini (`gemini --skip-trust -p "@gen.png @ref.png <prompt>"` from a dir where the PNGs aren't gitignored, e.g. copied to `/tmp`). Fix issues 2+ models agree on; treat single-model scale complaints skeptically (they anchor to the references' higher pixel resolution).

## Tooling notes

- Pre-commit (Husky + lint-staged): Prettier on staged files, then `turbo run lint check-types`. Tests are not run on commit — run `pnpm test` yourself before pushing.
- The Storybook vitest project needs Playwright Chromium (`pnpm exec playwright install chromium` if browsers are missing).
- Adding deps: `pnpm add <pkg> --filter @repo/ui` (or `-Dw` for root tooling).

## Skills

Project-local agent skills live in `.agents/skills/` (tracked in `skills-lock.json`, managed with `npx skills`): `turborepo` (official Vercel), `vitest`, `storybook-story-writing`, and `react-testing-library`. Consult them when working in their respective areas.
