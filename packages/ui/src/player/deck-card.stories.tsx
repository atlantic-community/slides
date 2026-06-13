import type { Meta, StoryObj } from "@storybook/react-vite";
import { DeckCard } from "./deck-card";
import { SlideText } from "../components/slide-text";
import { fonts } from "../components/tokens";

const meta = {
  title: "Player/Deck Card",
  component: DeckCard,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof DeckCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "sample",
    title: "Example Presentation",
    date: "June 2026",
    description:
      "This is a sample description for the deck card component in Storybook. It provides context about the presentation.",
    tags: ["Storybook", "Test", "Design System"],
    cover: (
      <div
        style={{
          padding: 40,
          width: "100%",
          height: "100%",
          background: "#111",
        }}
      >
        <SlideText size="md">Slide Preview</SlideText>
      </div>
    ),
  },
  render: (args) => (
    <div style={{ width: 400, color: "#fff", fontFamily: fonts.sans }}>
      <DeckCard {...args} />
    </div>
  ),
};
