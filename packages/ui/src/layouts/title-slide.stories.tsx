import type { Meta, StoryObj } from "@storybook/react-vite";

import { TitleSlide } from "./catalog";

const meta = {
  title: "Layouts/Title Slide",
  component: TitleSlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta<typeof TitleSlide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConferenceTalk: Story = {
  args: {
    eyebrow: "Atlantic Community",
    title: "Reusable slide design system",
    subtitle:
      "Conference talks, technical workshops, reports, and community events.",
    presenter: "Design systems team",
    event: "June 2026",
  },
};

export const Workshop: Story = {
  args: {
    eyebrow: "Hands-on session",
    title: "Build decks from code",
    subtitle: "Compose a full presentation using typed layout templates.",
    presenter: "Facilitator: Alex Rivera",
    event: "Community workshop",
  },
};

export const InternalReport: Story = {
  args: {
    eyebrow: "Quarterly review",
    title: "Platform adoption report",
    subtitle: "Signals, risks, decisions, and next bets.",
    presenter: "Developer experience",
    event: "Q2 planning",
  },
};
