import type { Meta, StoryObj } from "@storybook/react-vite";

import { avatarPlaceholder } from "../components/placeholders";
import { SlideText } from "../components/slide-text";
import { PeopleSlide } from "./people-slide";

const meta: Meta<typeof PeopleSlide> = {
  title: "Layouts/PeopleSlide",
  component: PeopleSlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
};

export default meta;
type Story = StoryObj<typeof PeopleSlide>;

const team = [
  { name: "Jorge Teixeira", src: avatarPlaceholder("JT", 0) },
  { name: "Santiago Saavedra", src: avatarPlaceholder("SS", 1) },
  { name: "Brais Arias", src: avatarPlaceholder("BA", 2) },
  { name: "Bruno Cabado", src: avatarPlaceholder("BC", 3) },
  { name: "Pablo Castro", src: avatarPlaceholder("PC", 4) },
  { name: "Pablo Cancelo", src: avatarPlaceholder("PC", 5) },
  { name: "Álvaro Freire", src: avatarPlaceholder("AF", 6) },
];

export const Default: Story = {
  args: {
    title: "Lorem Ipsum Title",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    people: team,
    rows: [2, 3, 2],
    children: (
      <>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
        <SlideText size="sm" muted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
      </>
    ),
  },
};
