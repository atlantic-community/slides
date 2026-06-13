import type { Meta, StoryObj } from "@storybook/react-vite";

import { BigStatSlide } from "./big-stat-slide";

const meta: Meta<typeof BigStatSlide> = {
  title: "Layouts/BigStatSlide",
  component: BigStatSlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
};

export default meta;

type Story = StoryObj<typeof BigStatSlide>;

export const Default: Story = {
  args: {
    value: "10.000",
    label: "Lorem Ipsum",
    context:
      "Our flagship event brought together developers, students and companies from all over Galicia for two days of talks and workshops.",
  },
};

export const ValueOnly: Story = {
  args: {
    value: "42",
    label: "Lorem Ipsum",
  },
};
