import type { Meta, StoryObj } from "@storybook/react-vite";

import { SlideText } from "../components/slide-text";
import { TitleBodySlide } from "./title-body-slide";

const meta: Meta<typeof TitleBodySlide> = {
  title: "Layouts/TitleBodySlide",
  component: TitleBodySlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
};

export default meta;
type Story = StoryObj<typeof TitleBodySlide>;

export const Default: Story = {
  args: {
    title: "Lorem Ipsum Title",
    children: (
      <>
        <SlideText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
      </>
    ),
  },
};

export const ShortPitch: Story = {
  args: {
    title: "Lorem Ipsum Title",
    children: (
      <>
        <SlideText size="lg" bold>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
      </>
    ),
  },
};
