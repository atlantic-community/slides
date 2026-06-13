import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  DecisionTreeSlide,
  FunnelSlide,
  JourneyMapSlide,
  MilestonesSlide,
  ProcessDiagramSlide,
  TimelineSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Process & Flow",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const roadmap = [
  {
    title: "Now",
    description: "Reusable primitives and core content layouts.",
  },
  { title: "Next", description: "Deck examples and export workflows." },
  { title: "Later", description: "Speaker notes, remote assets, and themes." },
];

export const ProcessDiagram: Story = {
  render: () => (
    <ProcessDiagramSlide
      title="Publishing workflow"
      steps={[
        { title: "Collect", description: "Gather source material" },
        { title: "Analyze", description: "Find the message" },
        { title: "Compose", description: "Choose templates" },
        { title: "Publish", description: "Render and review" },
      ]}
    />
  ),
};

export const Timeline: Story = {
  render: () => <TimelineSlide title="Product roadmap" items={roadmap} />,
};

export const Milestones: Story = {
  render: () => <MilestonesSlide title="Milestones" items={roadmap} />,
};

export const JourneyMap: Story = {
  render: () => (
    <JourneyMapSlide
      title="Contributor journey"
      stages={[
        { title: "Discover", description: "Finds the project and examples." },
        { title: "Try", description: "Runs Storybook and edits a deck." },
        { title: "Ship", description: "Publishes a reusable layout." },
      ]}
    />
  ),
};

export const Funnel: Story = {
  render: () => (
    <FunnelSlide
      title="Conversion funnel"
      stages={[
        { title: "1,200 visitors", description: "Landing and docs" },
        { title: "420 installs", description: "CLI and package setup" },
        { title: "160 active decks", description: "Teams authoring slides" },
        {
          title: "48 published talks",
          description: "Reusable templates in production",
        },
      ]}
    />
  ),
};

export const DecisionTree: Story = {
  render: () => (
    <DecisionTreeSlide
      title="Template decision tree"
      root="Does an existing layout express the message?"
      branches={[
        {
          title: "Yes",
          description: "Use the layout and supply content props.",
        },
        {
          title: "Almost",
          description: "Add a variant to the nearest layout.",
        },
        {
          title: "No",
          description: "Create a new reusable layout in the UI package.",
        },
      ]}
    />
  ),
};
