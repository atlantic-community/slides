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
    title: "Lorem Ipsum Title",
    body: (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <SlideText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
