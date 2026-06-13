import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  BeforeAfterVisualSlide,
  DemoSlide,
  ImageSlide,
  PhotoGallerySlide,
  ScreenshotSlide,
  VideoSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Media",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageFramed: Story = {
  render: () => (
    <ImageSlide
      title="Image slide"
      caption="A framed image placeholder with a concise caption."
      variant="framed"
    />
  ),
};

export const ImageFullBleed: Story = {
  render: () => (
    <ImageSlide
      title="Full bleed visual"
      caption="Use when the image is the slide."
      variant="full-bleed"
    />
  ),
};

export const Gallery: Story = {
  render: () => (
    <PhotoGallerySlide
      title="Photo gallery"
      variant="gallery"
      images={["Venue", "Workshop", "Speakers", "Audience"]}
    />
  ),
};

export const BrowserScreenshot: Story = {
  render: () => (
    <ScreenshotSlide title="Browser screenshot" variant="browser" />
  ),
};

export const MobileScreenshot: Story = {
  render: () => <ScreenshotSlide title="Mobile screenshot" variant="mobile" />,
};

export const Video: Story = {
  render: () => (
    <VideoSlide
      title="Video preview"
      caption="A static preview frame for embedded video or playback handoff."
    />
  ),
};

export const DemoSupport: Story = {
  render: () => (
    <DemoSlide
      title="Live demo"
      goal="Create a new deck from reusable templates."
      watch="The route appears automatically when the deck is registered."
      action="Navigate with keyboard controls and verify scale-to-fit."
    />
  ),
};

export const BeforeAfterVisual: Story = {
  render: () => (
    <BeforeAfterVisualSlide
      title="Before / after visual"
      left={{
        title: "Before",
        description: "Manual deck styling and inconsistent review artifacts.",
      }}
      right={{
        title: "After",
        description:
          "Reusable layouts, stable screenshots, and focused content.",
      }}
    />
  ),
};
