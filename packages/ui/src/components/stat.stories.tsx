import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stat } from "./stat";
import { colors } from "./tokens";

const meta = {
  title: "Components/Stat",
  component: Stat,
  tags: ["ai-generated"],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: colors.background,
          color: colors.foreground,
          padding: 64,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Stat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "350+",
    label: "Attendees per edition",
    description: "Developers, designers and founders from across Galicia.",
  },
};

export const ValueOnly: Story = {
  args: {
    value: "12",
  },
};

export const WithLabel: Story = {
  args: {
    value: "92%",
    label: "Would come back",
  },
};
