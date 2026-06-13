import type { Meta, StoryObj } from "@storybook/react-vite";

import { SlideLink } from "./slide-link";
import { fonts } from "./tokens";

const meta: Meta<typeof SlideLink> = {
  title: "Components/SlideLink",
  component: SlideLink,
  tags: ["ai-generated"],
  decorators: [
    (Story) => (
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: 32,
          fontFamily: fonts.sans,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SlideLink>;

export const HrefAsText: Story = {
  args: {
    href: "https://atlanticmakers.gal",
  },
};

export const CustomLabel: Story = {
  args: {
    href: "https://atlanticmakers.gal/sponsors",
    children: "Become a sponsor",
  },
};
