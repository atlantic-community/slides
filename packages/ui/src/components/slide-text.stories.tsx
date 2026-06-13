import type { Meta, StoryObj } from "@storybook/react-vite";

import { SlideText } from "./slide-text";
import { fonts } from "./tokens";

const meta: Meta<typeof SlideText> = {
  title: "Components/SlideText",
  component: SlideText,
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
type Story = StoryObj<typeof SlideText>;

export const Body: Story = {
  args: {
    children:
      "We are a community of developers, designers and hardware tinkerers from the Galician coast, meeting every month in Vigo and A Coruña to share what we build.",
  },
};

export const LeadBold: Story = {
  args: {
    children:
      "Every event is free for attendees — sponsors make that possible.",
    size: "lg",
    bold: true,
  },
};

export const MutedCaption: Story = {
  args: {
    children:
      "Photo: lightning talks night at the Mar de Vigo auditorium, March 2026.",
    size: "sm",
    muted: true,
  },
};
