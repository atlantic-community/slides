import type { Meta, StoryObj } from "@storybook/react-vite";

import { SlideText } from "../components/slide-text";
import { SlideImage } from "../components/slide-image";
import { GridSlide } from "./grid-slide";

const meta: Meta<typeof GridSlide> = {
  title: "Layouts/GridSlide",
  component: GridSlide,
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
};

export default meta;
type Story = StoryObj<typeof GridSlide>;

export const TwoColumns: Story = {
  args: {
    columns: 2,
    children: (
      <>
        <SlideImage
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1280&h=720"
          alt="Placeholder 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
        <SlideText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SlideText>
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    alignItems: "start",
    children: (
      <>
        <SlideText>
          Column 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </SlideText>
        <SlideText>
          Column 2: Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </SlideText>
        <SlideText>
          Column 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris.
        </SlideText>
      </>
    ),
  },
};

export const FourColumnsWithImages: Story = {
  args: {
    columns: 4,
    gap: 20,
    children: Array.from({ length: 4 }).map((_, i) => (
      <SlideImage
        key={i}
        src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=640&h=640`}
        alt={`Placeholder ${i + 1}`}
        style={{
          width: "100%",
          aspectRatio: "1",
          objectFit: "cover",
          borderRadius: 8,
        }}
      />
    )),
  },
};

export const SixColumnsGrid: Story = {
  args: {
    columns: 6,
    gap: 16,
    children: Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        style={{
          aspectRatio: "1",
          background: "rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {i + 1}
      </div>
    )),
  },
};
