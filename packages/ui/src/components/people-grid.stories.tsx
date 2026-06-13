import type { Meta, StoryObj } from "@storybook/react-vite";

import { PeopleGrid } from "./people-grid";
import { avatarPlaceholder } from "./placeholders";
import { colors } from "./tokens";

const organizers = [
  { name: "Jorge Teixeira", src: avatarPlaceholder("JT", 0) },
  { name: "Brais Arias", src: avatarPlaceholder("BA", 1) },
  { name: "Uxia Castro", src: avatarPlaceholder("UC", 2) },
  { name: "Anton Lopez", src: avatarPlaceholder("AL", 3) },
  { name: "Sabela Rey", src: avatarPlaceholder("SR", 4) },
  { name: "Iago Penas", src: avatarPlaceholder("IP", 5) },
];

const meta = {
  title: "Components/PeopleGrid",
  component: PeopleGrid,
  tags: ["ai-generated"],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: colors.background,
          color: colors.foreground,
          padding: 64,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PeopleGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    people: organizers,
  },
};

export const FourColumns: Story = {
  args: {
    people: [
      ...organizers,
      { name: "Noa Filgueira", src: avatarPlaceholder("NF", 6) },
      { name: "Xoel Davila", src: avatarPlaceholder("XD", 7) },
    ],
    columns: 4,
    avatarSize: 80,
  },
};
