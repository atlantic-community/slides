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
    title: "The Atlantic Community",
    subtitle: "Making Galicia the next European tech hub",
    metaLabel: "Dossier",
    metaLines: ["A Coruña, Spain"],
    email: "sponsor@1hack.eu",
  },
};

export const TitleOnly: Story = {
  args: {
    title: "1HackAway 2026",
  },
};
