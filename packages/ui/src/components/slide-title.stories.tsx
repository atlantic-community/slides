import type { Meta, StoryObj } from "@storybook/react-vite";

import { SlideTitle } from "./slide-title";
import { fonts } from "./tokens";

const meta: Meta<typeof SlideTitle> = {
  title: "Components/SlideTitle",
  component: SlideTitle,
  tags: ["ai-generated"],
  decorators: [
    (Story) => (
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: 32,
          fontFamily: fonts.sans,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SlideTitle>;

export const SectionTitle: Story = {
  args: {
    children: "Why sponsor Atlantic Community?",
  },
};

export const LargeSans: Story = {
  args: {
    children: "12 meetups. 900 makers. One coast.",
    size: "lg",
  },
};

export const CoverMono: Story = {
  args: {
    children: "Atlantic Community 2026",
    size: "xl",
    mono: true,
  },
};
