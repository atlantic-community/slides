import type { Meta, StoryObj } from "@storybook/react-vite";

import { ImageGrid } from "./image-grid";
import { photoPlaceholder } from "./placeholders";
import { colors } from "./tokens";

const meta: Meta<typeof ImageGrid> = {
  title: "Components/ImageGrid",
  component: ImageGrid,
  tags: ["ai-generated"],
  decorators: [
    (Story) => (
      <div style={{ background: colors.background, padding: 48, width: 1152 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ImageGrid>;

export const TwoColumns: Story = {
  args: {
    images: [
      { src: photoPlaceholder(0), alt: "Opening talk at the spring meetup" },
      { src: photoPlaceholder(1), alt: "Networking over coffee and empanada" },
      { src: photoPlaceholder(2), alt: "Hands-on hardware workshop tables" },
      { src: photoPlaceholder(3), alt: "Audience Q&A after the keynote" },
    ],
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    rowHeight: 200,
    images: [
      { src: photoPlaceholder(0), alt: "Demo night at the harbour venue" },
      { src: photoPlaceholder(1), alt: "Mentors helping a student team" },
      { src: photoPlaceholder(2), alt: "Sponsor stands in the main hall" },
      { src: photoPlaceholder(3), alt: "Lightning talk on robotics" },
      { src: photoPlaceholder(4), alt: "Closing group photo of attendees" },
      { src: photoPlaceholder(5), alt: "After-party by the estuary" },
    ],
  },
};
