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
    title: "Galician european tech hub",
    children: (
      <>
        <SlideText>
          We have enormous talent and great training here, nothing to envy other
          ecosystems around the world.
        </SlideText>
        <SlideText>
          In Galicia we build top products, both as companies and as
          professionals. Let&apos;s believe it and tell the world.
        </SlideText>
        <SlideText>
          Connect that talent to generate business and investment. And attract
          more of it from outside.
        </SlideText>
        <SlideText>
          Lead by doing things with quality and purpose: tech sovereignty,
          open-source AI, community-first events.
        </SlideText>
      </>
    ),
  },
};

export const ShortPitch: Story = {
  args: {
    title: "Why sponsor us",
    children: (
      <>
        <SlideText size="lg" bold>
          Reach 400+ makers, founders and engineers across Galicia every month.
        </SlideText>
        <SlideText>
          Your brand on stage at meetups in A Coruna, Vigo and Santiago, plus
          our newsletter and job board.
        </SlideText>
        <SlideText muted>
          Packages start at 500 EUR per quarter. Early partners get first pick
          of speaking slots.
        </SlideText>
      </>
    ),
  },
};
