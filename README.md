# atlantic-community-slides

A React slide **design system**, the **decks** built from it, and a **player** web app that presents them — organized as a [Turborepo](https://turborepo.dev/) + [pnpm](https://pnpm.io/) monorepo. Slides are fixed 1280×720 React components; decks are authored in code; the player scales and presents them in the browser.

## Requirements

- Node.js >= 18
- pnpm 10 (pinned via the `packageManager` field)

## Getting started

```sh
pnpm install
pnpm dev          # player app  → http://localhost:3000
pnpm storybook    # component/layout workshop → http://localhost:6006
```

## What's inside

| Path                         | Package                                        | Description                                                                                                 |
| ---------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `apps/player`                | `player`                                       | Next.js (App Router) app. Lists decks and presents one with scale-to-fit, keyboard nav, fullscreen.         |
| `packages/ui`                | `@atlantic-community-slides/ui`                | The design system: slide components + layout templates + tokens, developed in Storybook.                    |
| `packages/decks`             | `@atlantic-community-slides/decks`             | Deck content (`{ meta, slides[] }`) composed from `@atlantic-community-slides/ui` layouts, plus a registry. |
| `packages/eslint-config`     | `@atlantic-community-slides/eslint-config`     | Shared ESLint flat configs.                                                                                 |
| `packages/typescript-config` | `@atlantic-community-slides/typescript-config` | Shared `tsconfig.json` bases.                                                                               |
| `examples/`                  | —                                              | Reference slide images used as design input; not part of the build.                                         |

## Scripts

All scripts run from the repo root through Turborepo (cached). Scope to one workspace with `pnpm --filter player <script>` or `pnpm turbo run test --filter=@atlantic-community-slides/ui`.

| Command                             | What it does                                                        |
| ----------------------------------- | ------------------------------------------------------------------- |
| `pnpm dev`                          | Run dev servers (the player app on port 3000)                       |
| `pnpm build`                        | Production build (the player app)                                   |
| `pnpm storybook`                    | Start Storybook                                                     |
| `pnpm build-storybook`              | Build static Storybook to `packages/ui/storybook-static`            |
| `pnpm test`                         | All vitest projects (jsdom unit + Playwright/Chromium browser mode) |
| `pnpm lint`                         | ESLint, zero warnings allowed                                       |
| `pnpm check-types`                  | TypeScript `--noEmit` per package                                   |
| `pnpm format` / `pnpm format:check` | Prettier write / check                                              |

## Authoring a deck

Decks are written in **code (TSX), not through a UI** — typically by an agent. Add `packages/decks/src/decks/<id>.tsx` exporting a `Deck` composed from `@atlantic-community-slides/ui` layouts, register it in `packages/decks/src/registry.ts`, and it appears on the player index. Full guide + layout catalog: [`packages/decks/README.md`](packages/decks/README.md).

## Testing

Vitest runs across the workspaces: jsdom **unit** tests (colocated `*.test.tsx`) for logic, and **browser-mode** tests (headless Chromium via Playwright) — every `@atlantic-community-slides/ui` story runs as a test, and the player has navigation/interaction tests. If Playwright is missing browsers: `pnpm exec playwright install chromium`.

## Code quality

Husky runs on every commit: lint-staged formats staged files with Prettier, then `turbo run lint check-types` validates the workspace. Tests don't run on commit — run `pnpm test` before pushing.

Conventions for humans and coding agents live in [AGENTS.md](./AGENTS.md) (`CLAUDE.md` is a symlink to it).
