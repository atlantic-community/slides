import type { Meta, StoryObj } from "@storybook/react-vite";

import { BrandMark } from "./brand-mark";
import { colors } from "./tokens";

const meta = {
  title: "Components/BrandMark",
  component: BrandMark,
  tags: ["ai-generated"],
  decorators: [
    (Story, context) => (
      <div
        style={{
          position: "relative",
          width: 480,
          height: 200,
          backgroundColor: context.args.inverse
            ? colors.inverseBackground
            : colors.background,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BrandMark>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inverse: Story = {
  args: { inverse: true },
};

export const CustomText: Story = {
  args: { text: "Atlantic Makers\nConf 2026" },
};
