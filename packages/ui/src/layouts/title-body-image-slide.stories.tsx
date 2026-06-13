import type { Meta, StoryObj } from "@storybook/react-vite";

import { photoPlaceholder } from "../components/placeholders";
import { SlideText } from "../components/slide-text";
import { TitleBodyImageSlide } from "./title-body-image-slide";

const meta = {
  title: "Layouts/TitleBodyImageSlide",
  component: TitleBodyImageSlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta<typeof TitleBodyImageSlide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Lorem Ipsum Title",
    image: {
      src: photoPlaceholder(3),
      alt: "Atlantic Community meetup group photo outside the venue",
    },
    children: (
      <>
        <SlideText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
      </>
    ),
  },
};
