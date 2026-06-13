import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  CallToActionSlide,
  ContactSlide,
  RecapSlide,
  ThankYouSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Closing",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Recap: Story = {
  render: () => (
    <RecapSlide
      title="Recap"
      items={[
        "Foundations define the system language.",
        "Layouts cover common presentation jobs.",
        "Decks stay content-focused and reusable.",
      ]}
    />
  ),
};

export const CallToAction: Story = {
  render: () => (
    <CallToActionSlide
      title="Contribute"
      statement="Add the missing layout once, then reuse it in every future deck."
    />
  ),
};

export const Contact: Story = {
  render: () => (
    <ContactSlide
      title="Contact"
      url="atlantic.community/slides"
      cta="Share feedback, examples, and layout requests."
    />
  ),
};

export const ThankYou: Story = {
  render: () => (
    <ThankYouSlide
      title="Thank you"
      statement="Build the deck from content. Let the system handle the slide."
    />
  ),
};
