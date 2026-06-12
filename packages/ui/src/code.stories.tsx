import type { Meta, StoryObj } from "@storybook/react-vite";

import { Code } from "./code";

const meta = {
  component: Code,
  tags: ["ai-generated"],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "pnpm install",
  },
};

export const WithClassName: Story = {
  args: {
    children: "turbo run build",
    className: "custom-code",
  },
};
