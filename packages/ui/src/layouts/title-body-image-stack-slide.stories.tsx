import type { Meta, StoryObj } from "@storybook/react-vite";

import { photoPlaceholder } from "../components/placeholders";
import { SlideLink } from "../components/slide-link";
import { SlideText } from "../components/slide-text";
import { TitleBodyImageStackSlide } from "./title-body-image-stack-slide";

const meta: Meta<typeof TitleBodyImageStackSlide> = {
  title: "Layouts/TitleBodyImageStackSlide",
  component: TitleBodyImageStackSlide,
  tags: ["ai-generated"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof TitleBodyImageStackSlide>;

export const Hackathon: Story = {
  args: {
    title: "Lorem Ipsum Title",
    link: <SlideLink href="https://hackudc.gpul.org" tone="white" />,
    images: [
      { src: photoPlaceholder(0, 800, 500), alt: "Hackathon venue at night" },
      { src: photoPlaceholder(1, 800, 500), alt: "Teams hacking on stage" },
    ],
    children: (
      <>
        <SlideText size="sm" bold>
          800 attendees
          <br />
          Top-tier sponsors
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
      </>
    ),
  },
};

export const TechExpo: Story = {
  args: {
    title: "Lorem Ipsum Title",
    link: (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <SlideLink href="https://vds.tech" />
        <SlideLink href="https://www.southsummit.io/en" />
      </div>
    ),
    images: [
      {
        src: photoPlaceholder(2, 800, 500),
        alt: "Expo hall with startup booths",
      },
      {
        src: photoPlaceholder(3, 800, 500),
        alt: "Crowd walking between stands",
      },
    ],
    children: (
      <>
        <SlideText size="sm" bold>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
      </>
    ),
  },
};
