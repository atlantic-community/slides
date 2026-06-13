import type { Meta, StoryObj } from "@storybook/react-vite";

import { StatementSlide } from "./statement-slide";

const meta: Meta<typeof StatementSlide> = {
  title: "Layouts/StatementSlide",
  component: StatementSlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
};

export default meta;

type Story = StoryObj<typeof StatementSlide>;

export const Default: Story = {
  args: {
    children: "Queremos ir al siguiente nivel",
  },
};

export const LongerStatement: Story = {
  args: {
    children:
      "We are building the tech community Galicia deserves — one meetup at a time",
  },
};
