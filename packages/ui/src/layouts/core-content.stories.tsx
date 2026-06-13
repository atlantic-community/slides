import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AgendaSlide,
  BigNumberSlide,
  ComparisonSlide,
  FAQSlide,
  FeatureListSlide,
  ProsConsSlide,
  QuoteSlide,
  StatisticsGridSlide,
  TextImageSlide,
  TextSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Core Content",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const metrics = [
  { value: "50k", label: "Users", detail: "Across community events" },
  { value: "€1.2M", label: "ARR", detail: "Tracked pipeline" },
  { value: "67", label: "NPS", detail: "Latest survey" },
  { value: "93%", label: "Retention", detail: "Year over year" },
];

export const AgendaList: Story = {
  render: () => (
    <AgendaSlide
      title="Today"
      items={["Problem", "Solution", "Demo", "Next steps"]}
    />
  ),
};

export const AgendaProgress: Story = {
  render: () => (
    <AgendaSlide
      title="Workshop flow"
      variant="progress"
      current={2}
      items={["Setup", "Build", "Review", "Publish"]}
    />
  ),
};

export const AgendaTimeline: Story = {
  render: () => (
    <AgendaSlide
      title="Run of show"
      variant="timeline"
      current={1}
      items={["Opening", "Talks", "Breakout", "Closing"]}
    />
  ),
};

export const BulletText: Story = {
  render: () => (
    <TextSlide
      title="Slide authoring rules"
      items={[
        "Use layout props instead of inline styling in decks.",
        "Choose the closest template before creating a new layout.",
        "Keep slide content concise enough to scan from the back row.",
      ]}
    />
  ),
};

export const ParagraphText: Story = {
  render: () => (
    <TextSlide
      title="One idea per slide"
      body="A text slide should carry one clear argument. The type scale, line length, and safe zone make the content readable in a room without asking deck authors to tune pixels."
    />
  ),
};

export const NumberedText: Story = {
  render: () => (
    <TextSlide
      title="Migration steps"
      ordered
      items={[
        "Identify the repeated slide pattern.",
        "Move structure into a reusable layout.",
        "Replace inline deck styling with content props.",
      ]}
    />
  ),
};

export const TextPlusImage: Story = {
  render: () => (
    <TextImageSlide
      title="Pair one idea with one visual"
      body="The template keeps copy readable and leaves room for screenshots, diagrams, product images, or generated placeholders."
      items={[
        "Stable 16:9 geometry",
        "Reusable content props",
        "Deterministic placeholders",
      ]}
      imageLabel="Workshop"
    />
  ),
};

export const Quote: Story = {
  render: () => (
    <QuoteSlide
      context="Research"
      quote="The strongest slide systems make the next good slide easy to create."
      attribution="Internal design review"
    />
  ),
};

export const BigNumber: Story = {
  render: () => (
    <BigNumberSlide
      title="Deployment speed"
      value="80%"
      label="Reduction in release coordination time"
      detail="Measured across four product teams."
    />
  ),
};

export const StatisticsGrid: Story = {
  render: () => (
    <StatisticsGridSlide title="Community snapshot" metrics={metrics} />
  ),
};

export const FeatureCards: Story = {
  render: () => (
    <FeatureListSlide
      title="What ships in the system"
      variant="cards"
      features={[
        {
          title: "Content templates",
          description:
            "Agenda, text, quote, metrics, FAQ, and comparison slides.",
        },
        {
          title: "Flow templates",
          description:
            "Process, timeline, funnel, journey, and decision logic.",
        },
        {
          title: "Technical templates",
          description:
            "Code, terminal, diff, API, repository, and architecture slides.",
        },
      ]}
    />
  ),
};

export const IconFeatureList: Story = {
  render: () => (
    <FeatureListSlide
      title="Reusable capabilities"
      variant="icons"
      features={[
        {
          title: "Typed",
          description: "Every layout exposes explicit content props.",
        },
        {
          title: "Stable",
          description: "Slide geometry is fixed and screenshotable.",
        },
        {
          title: "Portable",
          description: "Decks can reuse the same templates.",
        },
      ]}
    />
  ),
};

export const Comparison: Story = {
  render: () => (
    <ComparisonSlide
      title="Before / After"
      left={{
        title: "Ad hoc deck",
        description:
          "Each slide invents structure, spacing, and emphasis again.",
      }}
      right={{
        title: "Design system deck",
        description: "Decks compose tested layouts and keep content portable.",
      }}
    />
  ),
};

export const ProsAndCons: Story = {
  render: () => (
    <ProsConsSlide
      title="Tradeoff"
      pros={[
        "Fast authoring",
        "Consistent spacing",
        "Reusable review artifacts",
      ]}
      cons={["Requires layout vocabulary", "New edge cases need templates"]}
    />
  ),
};

export const FAQ: Story = {
  render: () => (
    <FAQSlide
      title="FAQ"
      items={[
        {
          title: "Can decks stay in code?",
          description: "Yes. Layouts keep styling out of deck content.",
        },
        {
          title: "Can this support images?",
          description:
            "Yes. The current system uses deterministic placeholders by default.",
        },
        {
          title: "Can we add templates?",
          description: "Yes. Add a layout once and reuse it across decks.",
        },
      ]}
    />
  ),
};
