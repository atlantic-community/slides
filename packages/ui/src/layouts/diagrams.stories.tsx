import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  ArchitectureDiagramSlide,
  DataFlowDiagramSlide,
  EcosystemMapSlide,
  MindMapSlide,
  OrganizationChartSlide,
  SequenceDiagramSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Diagrams",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const systemNodes = [
  { title: "Deck code", description: "Typed TSX content" },
  { title: "UI package", description: "Tokens, primitives, layouts" },
  { title: "Player app", description: "Keyboard navigation and scale-to-fit" },
];

export const Architecture: Story = {
  render: () => (
    <ArchitectureDiagramSlide
      title="High-level architecture"
      nodes={systemNodes}
    />
  ),
};

export const DataFlow: Story = {
  render: () => <DataFlowDiagramSlide title="Data flow" nodes={systemNodes} />,
};

export const Sequence: Story = {
  render: () => (
    <SequenceDiagramSlide
      title="Sequence diagram"
      actors={["Author", "Deck registry", "Player"]}
      messages={[
        "create deck",
        "register id",
        "render route",
        "navigate slides",
      ]}
    />
  ),
};

export const OrganizationChart: Story = {
  render: () => (
    <OrganizationChartSlide
      title="Operating model"
      people={[
        { name: "Design systems", role: "Owns primitives and foundations" },
        { name: "Deck authors", role: "Compose content from layouts" },
        { name: "Reviewers", role: "Approve rendered slides" },
      ]}
    />
  ),
};

export const MindMap: Story = {
  render: () => (
    <MindMapSlide
      title="Mind map"
      center="Slide system"
      items={[
        { title: "Foundations", description: "Color, type, spacing" },
        { title: "Templates", description: "Repeatable slide structures" },
        { title: "Decks", description: "Content-only TSX" },
        { title: "Review", description: "Screenshots and Storybook" },
      ]}
    />
  ),
};

export const EcosystemMap: Story = {
  render: () => (
    <EcosystemMapSlide
      title="Ecosystem map"
      center="Community"
      items={[
        { title: "Sponsors", description: "Funding and venue support" },
        { title: "Speakers", description: "Content and facilitation" },
        { title: "Maintainers", description: "Tools and documentation" },
        { title: "Members", description: "Feedback and adoption" },
      ]}
    />
  ),
};
