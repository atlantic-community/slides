import type { Meta, StoryObj } from "@storybook/react-vite";

import { CoverSlide } from "./cover-slide";

const meta = {
  title: "Layouts/CoverSlide",
  component: CoverSlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta<typeof CoverSlide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dossier: Story = {
  args: {
    title: "Lorem Ipsum Title",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    metaLabel: "Label",
    metaLines: ["Line 1", "Line 2"],
    email: "email@example.com",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Lorem Ipsum Title",
  },
};
