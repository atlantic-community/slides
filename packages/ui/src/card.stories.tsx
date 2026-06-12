import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Card } from "./card";

const meta = {
  component: Card,
  tags: ["ai-generated"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Documentation",
    href: "https://turborepo.dev/docs",
    children: "Find in-depth information about Turborepo features and API.",
  },
  play: async ({ canvas, args }) => {
    const link = canvas.getByRole("link", { name: /documentation/i });
    await expect(link).toHaveAttribute(
      "href",
      expect.stringContaining(args.href),
    );
    await expect(link).toHaveAttribute("target", "_blank");
  },
};

export const LongContent: Story = {
  args: {
    title: "Examples",
    href: "https://turborepo.dev/examples",
    children:
      "Discover and deploy boilerplate example Turborepos with a much longer description that wraps onto multiple lines to exercise the card layout.",
  },
};
