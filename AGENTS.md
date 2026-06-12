# atlantic-makers-slides

Turborepo + pnpm monorepo for a React component library. No apps yet — only packages.

## Structure

- `packages/ui` — the component library (`@repo/ui`). Components live flat in `src/` (e.g. `src/button.tsx`), exported via the `./*` exports map (`@repo/ui/button`).
- `packages/eslint-config` — shared ESLint flat configs (`@repo/eslint-config`).
- `packages/typescript-config` — shared tsconfig bases (`@repo/typescript-config`).
- `examples/` — reference slide images, not part of the build.

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

## Conventions

- **Components**: one component per file in `packages/ui/src/`, lowercase filenames, named exports, props interfaces exported (needed so story metas can be typed).
- **Stories**: colocated `*.stories.tsx` next to the component, CSF3 with `satisfies Meta<typeof X>`. Stories double as browser tests via `@storybook/addon-vitest` — add a `play` function only when it proves behavior a plain render doesn't (interactions, async content, aria state).
- **Unit tests**: colocated `*.test.tsx`, vitest + Testing Library in jsdom. Use these for logic; use stories for rendering/interaction coverage.
- **Styling**: components are unstyled and accept `className`; there is no global stylesheet in the library.

## Tooling notes

- Pre-commit (Husky + lint-staged): Prettier on staged files, then `turbo run lint check-types`. Tests are not run on commit — run `pnpm test` yourself before pushing.
- The Storybook vitest project needs Playwright Chromium (`pnpm exec playwright install chromium` if browsers are missing).
- Adding deps: `pnpm add <pkg> --filter @repo/ui` (or `-Dw` for root tooling).
