import type { Meta, StoryObj } from "@storybook/react-vite";
import { Controls } from "./controls";
import { fonts } from "../components/tokens";

const meta = {
  title: "Player/Controls",
  component: Controls,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Controls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 0,
    count: 10,
    title: "Example Presentation",
    visible: true,
    isFullscreen: false,
    onPrev: () => console.log("prev"),
    onNext: () => console.log("next"),
    onToggleFullscreen: () => console.log("fullscreen"),
    onSeek: (frac) => console.log("seek", frac),
    onExit: () => console.log("exit"),
  },
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 300,
        background: "#000",
        color: "#fff",
        fontFamily: fonts.sans,
      }}
    >
      <Controls {...args} />
    </div>
  ),
};
