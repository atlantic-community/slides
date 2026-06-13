import type { Meta, StoryObj } from "@storybook/react-vite";
import { DeckEmpty } from "./deck-empty";

const meta = {
  title: "Player/Deck Empty",
  component: DeckEmpty,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof DeckEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
