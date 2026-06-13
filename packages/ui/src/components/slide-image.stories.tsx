import type { Meta, StoryObj } from "@storybook/react-vite";

import { photoPlaceholder } from "./placeholders";
import { SlideImage } from "./slide-image";
import { colors } from "./tokens";

const meta: Meta<typeof SlideImage> = {
  title: "Components/SlideImage",
  component: SlideImage,
  tags: ["ai-generated"],
  decorators: [
    (Story) => (
      <div style={{ background: colors.background, padding: 48 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SlideImage>;

export const Default: Story = {
  args: {
    src: photoPlaceholder(1, 800, 500),
    alt: "Crowd at the Atlantic Makers meetup in Vigo",
    width: 560,
    height: 350,
  },
};

export const Square: Story = {
  args: {
    src: photoPlaceholder(2, 600, 600),
    alt: "Speaker on stage during the lightning talks",
    width: 320,
    height: 320,
  },
};

export const NotRounded: Story = {
  args: {
    src: photoPlaceholder(3, 800, 500),
    alt: "Full-bleed shot of the venue in A Coruna",
    width: 560,
    height: 350,
    rounded: false,
  },
};
