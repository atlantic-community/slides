import type { Meta, StoryObj } from "@storybook/react-vite";

import { LogoGrid } from "./logo-grid";
import { logoPlaceholder } from "./placeholders";
import { colors } from "./tokens";

const meta: Meta<typeof LogoGrid> = {
  title: "Components/LogoGrid",
  component: LogoGrid,
  tags: ["ai-generated"],
  decorators: [
    (Story) => (
      <div
        style={{
          background: colors.inverseBackground,
          padding: 48,
          width: 1152,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LogoGrid>;

export const Sponsors: Story = {
  args: {
    logos: [
      { src: logoPlaceholder("Galimaroto", 0), alt: "Galimaroto" },
      { src: logoPlaceholder("Riamar Cloud", 1), alt: "Riamar Cloud" },
      { src: logoPlaceholder("Pontevedra DC", 2), alt: "Pontevedra DC" },
      { src: logoPlaceholder("Atlantia Labs", 3), alt: "Atlantia Labs" },
      { src: logoPlaceholder("Orballo AI", 4), alt: "Orballo AI" },
      { src: logoPlaceholder("Faro Systems", 0), alt: "Faro Systems" },
      { src: logoPlaceholder("Berbes Devs", 1), alt: "Berbes Devs" },
      { src: logoPlaceholder("Miño Robotics", 2), alt: "Miño Robotics" },
    ],
  },
};

export const ThreeColumnsLarge: Story = {
  args: {
    columns: 3,
    logoHeight: 64,
    gap: 48,
    logos: [
      { src: logoPlaceholder("Galimaroto", 0), alt: "Galimaroto" },
      { src: logoPlaceholder("Riamar Cloud", 1), alt: "Riamar Cloud" },
      { src: logoPlaceholder("Atlantia Labs", 3), alt: "Atlantia Labs" },
    ],
  },
};

/** Framed variant — subtle tiles for busy or low-contrast backgrounds. */
export const Framed: Story = {
  args: {
    framed: true,
    logos: [
      { src: logoPlaceholder("Galimaroto", 0), alt: "Galimaroto" },
      { src: logoPlaceholder("Riamar Cloud", 1), alt: "Riamar Cloud" },
      { src: logoPlaceholder("Pontevedra DC", 2), alt: "Pontevedra DC" },
      { src: logoPlaceholder("Atlantia Labs", 3), alt: "Atlantia Labs" },
    ],
  },
};
