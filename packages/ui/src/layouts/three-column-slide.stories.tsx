import type { Meta, StoryObj } from "@storybook/react-vite";

import { photoPlaceholder } from "../components/placeholders";
import { SlideLink } from "../components/slide-link";
import { ThreeColumnSlide } from "./three-column-slide";

const meta: Meta<typeof ThreeColumnSlide> = {
  title: "Layouts/ThreeColumnSlide",
  component: ThreeColumnSlide,
  tags: ["ai-generated"],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof ThreeColumnSlide>;

export const OurEvents: Story = {
  args: {
    title: "Nuestros eventos",
    columns: [
      {
        heading: "GUADEC/Akademy/XDC",
        stats: (
          <>
            5 ediciones (2 + 1 + 2)
            <br />
            ~200 desarrolladores en cada evento
          </>
        ),
        body: "Conferencias internacionales de comunidades open source y con profesionales referencia en su campo.",
        image: { src: photoPlaceholder(0, 800, 500), alt: "GUADEC audience" },
      },
      {
        heading: "AtlánticaConf",
        link: (
          <SlideLink href="https://atlanticaconf.com">
            atlanticaconf.com
          </SlideLink>
        ),
        stats: (
          <>
            3 ediciones
            <br />
            +400 profesionales senior
          </>
        ),
        body: "La mayor conferencia de desarrollo del noroeste de España que da visibilidad a lo que se hace en Galicia.",
        image: {
          src: photoPlaceholder(1, 800, 500),
          alt: "AtlánticaConf main stage",
        },
      },
      {
        heading: "HackUDC",
        link: (
          <SlideLink href="https://hackudc.gpul.org">
            hackudc.gpul.org
          </SlideLink>
        ),
        stats: (
          <>
            4 ediciones
            <br />
            500 estudiantes
          </>
        ),
        body: "El segundo hackathon universitario más grande de España con estudiantes nacionales e internacionales.",
        image: {
          src: photoPlaceholder(2, 800, 500),
          alt: "HackUDC teams hacking",
        },
      },
    ],
  },
};
