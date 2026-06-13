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
    title: "1hack",
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
          Attract professionals and top sponsors from outside Galicia.
        </SlideText>
        <SlideText size="sm" muted>
          The big sibling of HackUDC: the largest hackathon in Spain and one of
          the largest in Europe.
        </SlideText>
        <SlideText size="sm" muted>
          A hackathon aimed at professionals and entrepreneurship.
        </SlideText>
        <SlideText size="sm" muted>
          Theme: AI. Teams will come to do real AI R&D.
        </SlideText>
      </>
    ),
  },
};

export const TechExpo: Story = {
  args: {
    title: "Atlántica Tech Expo",
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
          10,000 attendees
        </SlideText>
        <SlideText size="sm" muted>
          Mission: grow Galicia&apos;s GDP without depending on the Camino de
          Santiago or on building cars.
        </SlideText>
        <SlideText size="sm" muted>
          Connect investors with startups. Connect corporates with startups.
          Help institutions get to know the sector.
        </SlideText>
        <SlideText size="sm" muted>
          A space to give visibility to Galician tech companies and bring
          technology closer to society and students.
        </SlideText>
      </>
    ),
  },
};
