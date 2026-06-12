# atlantic-makers-slides

React component library for Atlantic Makers slides, developed in [Storybook](https://storybook.js.org/) and organized as a [Turborepo](https://turborepo.dev/) + [pnpm](https://pnpm.io/) monorepo. There are no apps yet — the library is the product for now.

## Requirements

- Node.js >= 18
- pnpm 10 (pinned via the `packageManager` field)

## Getting started

```sh
pnpm install
pnpm storybook
```

Storybook runs at <http://localhost:6006>.

## What's inside

| Path                         | Package                   | Description                                                                                                           |
| ---------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `packages/ui`                | `@repo/ui`                | The component library. Components live flat in `src/` and are imported as `@repo/ui/<name>` (e.g. `@repo/ui/button`). |
| `packages/eslint-config`     | `@repo/eslint-config`     | Shared ESLint flat configs.                                                                                           |
| `packages/typescript-config` | `@repo/typescript-config` | Shared `tsconfig.json` bases.                                                                                         |
| `examples/`                  | —                         | Reference slide images used as design input; not part of the build.                                                   |

## Scripts

All scripts run from the repo root and go through Turborepo, so results are cached.

| Command                | What it does                                             |
| ---------------------- | -------------------------------------------------------- |
| `pnpm storybook`       | Start the Storybook dev server                           |
| `pnpm build-storybook` | Build static Storybook to `packages/ui/storybook-static` |
| `pnpm test`            | Run all tests (unit + story-based browser tests)         |
| `pnpm lint`            | ESLint with zero warnings allowed                        |
| `pnpm check-types`     | TypeScript `--noEmit` check per package                  |
| `pnpm format`          | Format the repo with Prettier                            |
| `pnpm format:check`    | Verify formatting without writing                        |

Scope any task to a single package with a filter: `pnpm turbo run test --filter=@repo/ui`.

## Testing

Vitest drives two projects inside `packages/ui`:

- **`unit`** — colocated `*.test.tsx` files run in jsdom with Testing Library. Use these for logic.
- **`storybook`** — every story runs as a browser test (headless Chromium via Playwright) through `@storybook/addon-vitest`, including `play` interaction assertions and a11y checks. Use stories for rendering and interaction coverage.

```sh
pnpm test                          # everything
pnpm --filter @repo/ui test:unit   # unit only
pnpm --filter @repo/ui test:storybook
```

If Playwright complains about missing browsers: `pnpm --filter @repo/ui exec playwright install chromium`.

## Writing a component

1. Add `packages/ui/src/<name>.tsx` — named export, exported props interface, lowercase filename. Components are unstyled and accept `className`.
2. Add a colocated `<name>.stories.tsx` (CSF3 with `satisfies Meta<typeof X>`). Stories double as tests; add a `play` function only when it proves behavior a plain render doesn't.
3. Add `<name>.test.tsx` if there is logic worth unit-testing.
4. `pnpm test && pnpm lint && pnpm check-types`.

## Code quality

Husky runs on every commit: lint-staged formats staged files with Prettier, then `turbo run lint check-types` validates the workspace (cached, typically <100ms when nothing changed). Tests don't run on commit — run `pnpm test` before pushing.

Conventions for both humans and coding agents live in [AGENTS.md](./AGENTS.md) (`CLAUDE.md` is a symlink to it).
