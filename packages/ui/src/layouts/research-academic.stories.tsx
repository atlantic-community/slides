import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  DiscussionSlide,
  LimitationsSlide,
  MethodologySlide,
  ReferencesSlide,
  ResearchQuestionSlide,
  ResultsSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Research & Academic",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ResearchQuestion: Story = {
  render: () => (
    <ResearchQuestionSlide
      title="Research question"
      statement="Can reusable slide templates improve review quality without slowing authors down?"
    />
  ),
};

export const Methodology: Story = {
  render: () => (
    <MethodologySlide
      title="Methodology"
      parts={[
        {
          title: "Sample",
          description: "Recent technical and community decks.",
        },
        {
          title: "Method",
          description: "Compare authoring time and review notes.",
        },
        {
          title: "Measure",
          description: "Track revisions, defects, and reuse.",
        },
      ]}
    />
  ),
};

export const Results: Story = {
  render: () => (
    <ResultsSlide
      title="Results"
      metrics={[
        { value: "42%", label: "Fewer visual comments" },
        { value: "3x", label: "Template reuse" },
        { value: "18", label: "Layouts covered" },
      ]}
    />
  ),
};

export const Discussion: Story = {
  render: () => (
    <DiscussionSlide
      title="Discussion"
      body="The system shifts review from presentation mechanics toward narrative quality. The largest remaining risk is layout sprawl without a clear contribution standard."
    />
  ),
};

export const References: Story = {
  render: () => (
    <ReferencesSlide
      title="References"
      items={[
        "Internal deck review notes, 2026.",
        "Storybook screenshot review workflow.",
        "Atlantic Community slide authoring guide.",
      ]}
    />
  ),
};

export const Limitations: Story = {
  render: () => (
    <LimitationsSlide
      title="Limitations"
      items={[
        "Charts are presentational placeholders, not analytical engines.",
        "Complex diagrams may still need custom layout work.",
        "Visual QA should use rendered screenshots before publishing.",
      ]}
    />
  ),
};
