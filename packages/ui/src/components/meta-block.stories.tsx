import type { Meta, StoryObj } from "@storybook/react-vite";

import { MetaBlock } from "./meta-block";
import { fonts } from "./tokens";

const meta: Meta<typeof MetaBlock> = {
  title: "Components/MetaBlock",
  component: MetaBlock,
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
type Story = StoryObj<typeof MetaBlock>;

export const CoverContact: Story = {
  args: {
    label: "Xoana Rivas — Community Lead",
    lines: ["Atlantic Community", "Vigo · A Coruña · Santiago"],
    email: "hola@atlanticmakers.gal",
  },
};

export const EventDetails: Story = {
  args: {
    label: "Sponsor Day 2026",
    lines: [
      "Thursday, 24 September",
      "Cidade da Cultura, Santiago de Compostela",
    ],
  },
};
