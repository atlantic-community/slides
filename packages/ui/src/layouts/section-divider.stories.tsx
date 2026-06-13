import type { Meta, StoryObj } from "@storybook/react-vite";

import { SectionDivider } from "./catalog";

const meta = {
  title: "Layouts/Section Divider",
  component: SectionDivider,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta<typeof SectionDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Problem: Story = {
  args: {
    eyebrow: "Chapter 01",
    title: "Problem",
    subtitle: "Decks are easy to create and hard to keep coherent.",
  },
};

export const Solution: Story = {
  args: {
    eyebrow: "Chapter 02",
    title: "Solution",
    subtitle: "Layouts own structure. Decks supply content.",
  },
};

export const Results: Story = {
  args: {
    eyebrow: "Chapter 03",
    title: "Results",
    subtitle: "Reusable slides create faster review loops.",
  },
};
