import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  APIExampleSlide,
  ArchitectureEvolutionSlide,
  CodeBlockSlide,
  DecisionRecordSlide,
  DiffViewSlide,
  OpenSourceProjectCardSlide,
  RepositorySlide,
  TerminalWindowSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Technical",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const CodeBlock: Story = {
  render: () => (
    <CodeBlockSlide
      title="Code block"
      highlight={[3]}
      code={`export const deck = {
  meta,
  slides: [
    <TitleSlide title="Hello" />,
  ],
};`}
    />
  ),
};

export const TerminalWindow: Story = {
  render: () => (
    <TerminalWindowSlide
      title="Terminal window"
      command="pnpm --filter @atlantic-community-slides/ui check-types"
      output={`> tsc --noEmit
Done in 1.2s`}
    />
  ),
};

export const DiffView: Story = {
  render: () => (
    <DiffViewSlide
      title="Diff view"
      before={`<TextSlide title="Old" />`}
      after={`<TextSlide
  title="New"
  body="Reusable content props"
/>`}
    />
  ),
};

export const APIExample: Story = {
  render: () => (
    <APIExampleSlide
      title="API example"
      request={`POST /decks
{ "title": "Demo" }`}
      response={`201 Created
{ "id": "demo" }`}
    />
  ),
};

export const Repository: Story = {
  render: () => (
    <RepositorySlide
      title="Repository"
      url="github.com/atlantic-community/slides"
      cta="Scan or visit the repository for examples and contribution notes."
    />
  ),
};

export const OpenSourceProjectCard: Story = {
  render: () => (
    <OpenSourceProjectCardSlide
      title="Open source project"
      project={{
        title: "Atlantic Slides",
        description: "A reusable slide system for code-authored decks.",
        license: "MIT",
        language: "TypeScript",
        contributors: "12 contributors",
        repository: "github.com/atlantic-community/slides",
      }}
    />
  ),
};

export const ArchitectureEvolution: Story = {
  render: () => (
    <ArchitectureEvolutionSlide
      title="Architecture evolution"
      versions={[
        { title: "v1", description: "Standalone slide components" },
        { title: "v2", description: "Shared layouts and deck registry" },
        { title: "v3", description: "Export and review automation" },
      ]}
    />
  ),
};

export const DecisionRecord: Story = {
  render: () => (
    <DecisionRecordSlide
      title="Decision record"
      problem="Deck authors need a way to make consistent slides without copying styles."
      alternatives={[
        "Inline styles in each deck",
        "A visual editor",
        "Typed layout templates",
      ]}
      decision="Use reusable TSX layout templates in the UI package."
      consequences="Decks stay content-focused, and new patterns become shared infrastructure."
    />
  ),
};
