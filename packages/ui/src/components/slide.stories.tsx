import type { Meta, StoryObj } from "@storybook/react-vite";

import { photoPlaceholder } from "./placeholders";
import { Slide } from "./slide";
import { colors, fonts } from "./tokens";

const meta = {
  title: "Components/Slide",
  component: Slide,
  tags: ["ai-generated"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Slide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ marginTop: 56 }}>
        <h1
          style={{
            margin: 0,
            fontFamily: fonts.sans,
            fontWeight: 700,
            fontSize: 44,
            lineHeight: 1.15,
          }}
        >
          Why we run Atlantic Community
        </h1>
        <p
          style={{
            margin: "24px 0 0",
            maxWidth: 760,
            fontSize: 20,
            lineHeight: 1.5,
            color: colors.muted,
          }}
        >
          A community of builders from Vigo, A Coruna and the rest of Galicia.
          Monthly meetups, hands-on workshops and one big annual conference by
          the Atlantic.
        </p>
      </div>
    ),
  },
};

export const Inverse: Story = {
  args: {
    inverse: true,
    children: (
      <div style={{ marginTop: 56 }}>
        <h1
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: 44,
            lineHeight: 1.15,
          }}
        >
          Our sponsors
        </h1>
        <p style={{ margin: "24px 0 0", fontSize: 20, lineHeight: 1.5 }}>
          The inverted variant: white background, black text. Used for logo
          walls and partner slides.
        </p>
      </div>
    ),
  },
};

export const FullBleed: Story = {
  args: {
    padded: false,
    brand: false,
    children: (
      <img
        src={photoPlaceholder(2, 1280, 720)}
        alt="Crowd at an Atlantic Community meetup"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ),
  },
};
