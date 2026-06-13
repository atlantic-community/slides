import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  CommunityShowcaseSlide,
  EventScheduleSlide,
  PartnerShowcaseSlide,
  QRCodeSlide,
  SpeakerCardSlide,
  SponsorGridSlide,
  TeamSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Event & Community",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpeakerCard: Story = {
  render: () => (
    <SpeakerCardSlide
      title="Speaker card"
      speaker={{
        name: "Alex Rivera",
        role: "Community organizer",
        bio: "Talks about open source, resilient teams, and practical systems design.",
      }}
    />
  ),
};

export const SponsorGrid: Story = {
  render: () => (
    <SponsorGridSlide
      title="Sponsors"
      sponsors={[
        "Northwind",
        "Contoso",
        "Fabrikam",
        "Tailspin",
        "Globex",
        "Initech",
        "Umbrella",
        "Stark",
      ]}
    />
  ),
};

export const EventSchedule: Story = {
  render: () => (
    <EventScheduleSlide
      title="Event schedule"
      rows={[
        { title: "09:30", description: "Doors open and coffee" },
        { title: "10:00", description: "Opening keynote" },
        { title: "11:15", description: "Workshop sessions" },
      ]}
    />
  ),
};

export const CommunityShowcase: Story = {
  render: () => (
    <CommunityShowcaseSlide
      title="Community showcase"
      features={[
        { title: "Meetups", description: "Monthly local sessions." },
        { title: "Projects", description: "Open-source collaboration." },
        { title: "Mentorship", description: "Peer support and onboarding." },
      ]}
    />
  ),
};

export const TeamSlideExample: Story = {
  render: () => (
    <TeamSlide
      title="Team"
      people={[
        { name: "Design", role: "Layout system" },
        { name: "Engineering", role: "Player and packages" },
        { name: "Community", role: "Events and feedback" },
      ]}
    />
  ),
};

export const PartnerShowcase: Story = {
  render: () => (
    <PartnerShowcaseSlide
      title="Partners"
      sponsors={["City Lab", "Open Collective", "Makers Hub", "Cloud Co."]}
    />
  ),
};

export const QRCode: Story = {
  render: () => (
    <QRCodeSlide
      title="Join the community"
      url="atlantic.community/slides"
      cta="Open the link for resources, examples, and feedback."
    />
  ),
};
