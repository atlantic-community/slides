import type { Meta, StoryObj } from "@storybook/react-vite";
import { DeckSearch } from "./deck-search";
import { fonts } from "../components/tokens";

const meta = {
  title: "Player/Search Input",
  component: DeckSearch,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof DeckSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    onChange: (val) => console.log("search", val),
  },
  render: (args) => (
    <div
      style={{
        width: 400,
        color: "#fff",
        fontFamily: fonts.sans,
      }}
    >
      <DeckSearch {...args} />
    </div>
  ),
};
