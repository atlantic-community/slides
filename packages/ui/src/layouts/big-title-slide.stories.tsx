import type { Meta, StoryObj } from "@storybook/react-vite";

import { SlideLink } from "../components/slide-link";
import { BigTitleSlide } from "./big-title-slide";

const meta: Meta<typeof BigTitleSlide> = {
  title: "Layouts/BigTitleSlide",
  component: BigTitleSlide,
  tags: ["ai-generated"],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof BigTitleSlide>;

export const Default: Story = {
  args: {
    title: "Lorem Ipsum Title",
    footer: (
      <SlideLink href="mailto:sponsor@1hack.eu" tone="white">
        sponsor@1hack.eu
      </SlideLink>
    ),
  },
};

export const WithoutFooter: Story = {
  args: {
    title: "Lorem Ipsum Title",
  },
};
