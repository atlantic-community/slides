import type { Meta, StoryObj } from "@storybook/react-vite";

import { LogoGrid } from "../components/logo-grid";
import { logoPlaceholder } from "../components/placeholders";
import { SlideText } from "../components/slide-text";
import { SideBySideSlide } from "./side-by-side-slide";

const meta: Meta<typeof SideBySideSlide> = {
  title: "Layouts/SideBySideSlide",
  component: SideBySideSlide,
  tags: ["ai-generated"],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof SideBySideSlide>;

const sponsorNames = [
  "Google",
  "NVIDIA",
  "Intel",
  "arm",
  "AMD",
  "Valve",
  "Canonical",
  "Red Hat",
  "Collabora",
  "WordPress",
  "okta",
  "Inditex Tech",
];

const sponsorLogos = sponsorNames.map((name, i) => ({
  src: logoPlaceholder(name, i),
  alt: name,
}));

export const SponsorWall: Story = {
  args: {
    title: "Sponsors internacionales que ya han confiado en nosotros",
    body: (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <SlideText size="sm">
          Estos son algunos de los sponsors que han trabajado con nosotros en
          los diferentes eventos, tanto locales como de diferentes comunidades
          open source globales como Gnome, KDE o la X.org Foundation, que hemos
          organizado.
        </SlideText>
        <SlideText size="sm">
          Eventos con los mejores profesionales del mundo, organizados en
          ediciones anteriores en lugares como las oficinas principales de
          Google en Mountain View, y que conseguimos atraer a Galicia.
        </SlideText>
      </div>
    ),
    right: (
      <LogoGrid
        logos={sponsorLogos}
        columns={3}
        gap={24}
        cellHeight={116}
        logoHeight={46}
      />
    ),
  },
};
