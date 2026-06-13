import type { Meta, StoryObj } from "@storybook/react-vite";

import { logoPlaceholder } from "../components/placeholders";
import { LogoWallSlide } from "./logo-wall-slide";

const meta: Meta<typeof LogoWallSlide> = {
  title: "Layouts/LogoWallSlide",
  component: LogoWallSlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
};

export default meta;

type Story = StoryObj<typeof LogoWallSlide>;

const supporters = [
  "aesia",
  "OpositaTest",
  "Coruña Tech",
  "Startup Galicia",
  "denodo",
  "Inditex Tech",
  "ExpoCoruña",
  "Universidade da Coruña",
  "AGASOL",
].map((name, i) => ({ src: logoPlaceholder(name, i), alt: name }));

export const Supporters: Story = {
  args: {
    title: "Lorem Ipsum Title",
    logos: supporters,
  },
};
