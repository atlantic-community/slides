import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Button } from "./button";

const meta = {
  component: Button,
  tags: ["ai-generated"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    appName: "atlantic-makers-slides",
  },
  play: async ({ canvas, userEvent, args }) => {
    const alerts: string[] = [];
    const originalAlert = window.alert;
    window.alert = (message?: unknown) => {
      alerts.push(String(message));
    };
    try {
      await userEvent.click(canvas.getByRole("button", { name: /click me/i }));
    } finally {
      window.alert = originalAlert;
    }
    await expect(alerts[0]).toContain(args.appName);
  },
};

export const WithClassName: Story = {
  args: {
    children: "Styled by consumer",
    appName: "docs",
    className: "custom-button",
  },
};
