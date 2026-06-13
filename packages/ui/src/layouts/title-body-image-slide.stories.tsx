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
    title: "Galician european tech hub",
    image: {
      src: photoPlaceholder(3),
      alt: "Atlantic Community meetup group photo outside the venue",
    },
    children: (
      <>
        <SlideText size="sm">
          We have enormous talent and great education, nothing to envy other
          ecosystems around the world.
        </SlideText>
        <SlideText size="sm">
          In Galicia we build world-class things, both as companies and as
          professionals. Let&apos;s believe it and tell the world.
        </SlideText>
        <SlideText size="sm">
          Connect that talent to generate business and investment. And attract
          more of it from outside.
        </SlideText>
        <SlideText size="sm">
          Lead by doing things with high quality and purpose: tech sovereignty,
          open source AI, and more.
        </SlideText>
        <SlideText size="sm">
          The future of our kids, wherever it happens, should never lack a path
          back home to build great things.
        </SlideText>
      </>
    ),
  },
};
