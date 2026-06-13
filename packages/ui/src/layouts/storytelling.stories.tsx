import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  ChallengeSlide,
  ConclusionSlide,
  KeyInsightSlide,
  KeyTakeawaySlide,
  LessonsLearnedSlide,
  MythRealitySlide,
} from "./catalog";

const meta = {
  title: "Layouts/Storytelling",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Challenge: Story = {
  render: () => (
    <ChallengeSlide
      title="Challenge"
      parts={[
        {
          title: "Constraint",
          description: "Decks must stay authorable in code.",
        },
        {
          title: "Tradeoff",
          description: "Templates need breadth without becoming vague.",
        },
        {
          title: "Decision",
          description: "Ship focused layouts with explicit props.",
        },
      ]}
    />
  ),
};

export const LessonsLearned: Story = {
  render: () => (
    <LessonsLearnedSlide
      title="Lessons learned"
      parts={[
        {
          title: "What worked",
          description: "Typed templates and screenshot review.",
        },
        {
          title: "What failed",
          description: "One-off inline styling in deck content.",
        },
        {
          title: "What changed",
          description: "New patterns become UI package layouts.",
        },
      ]}
    />
  ),
};

export const MythVsReality: Story = {
  render: () => (
    <MythRealitySlide
      title="Myth vs reality"
      left={{
        title: "Myth",
        description: "A slide system makes every deck look identical.",
      }}
      right={{
        title: "Reality",
        description:
          "A slide system makes core decisions reusable so the message can vary.",
      }}
    />
  ),
};

export const KeyInsight: Story = {
  render: () => (
    <KeyInsightSlide
      title="Key insight"
      statement="A good deck system is a content model with presentation defaults."
    />
  ),
};

export const KeyTakeaway: Story = {
  render: () => (
    <KeyTakeawaySlide
      title="Key takeaway"
      statement="Make the system own layout. Make the deck own the story."
    />
  ),
};

export const Conclusion: Story = {
  render: () => (
    <ConclusionSlide
      title="Conclusion"
      statement="The first version is broad enough to author real decks and structured enough to evolve."
    />
  ),
};
