import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  BusinessModelSlide,
  CaseStudySlide,
  CompetitiveLandscapeSlide,
  CustomerPersonaSlide,
  MarketOpportunitySlide,
  ProblemStatementSlide,
  ProductRoadmapSlide,
  SolutionSlide,
  TestimonialSlide,
  ValuePropositionSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Product & Startup",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProblemStatement: Story = {
  render: () => (
    <ProblemStatementSlide
      title="Problem statement"
      parts={[
        {
          title: "Pain",
          description: "Teams rebuild the same deck patterns repeatedly.",
        },
        {
          title: "Impact",
          description: "Review slows down and consistency drifts.",
        },
        {
          title: "Evidence",
          description:
            "Recent decks duplicate layout code and visual decisions.",
        },
      ]}
    />
  ),
};

export const Solution: Story = {
  render: () => (
    <SolutionSlide
      title="Solution"
      parts={[
        {
          title: "Approach",
          description: "Ship typed layout templates in the UI package.",
        },
        {
          title: "Why it works",
          description: "Decks become content-only compositions.",
        },
        {
          title: "Benefits",
          description: "Faster authoring, review, and reuse.",
        },
      ]}
    />
  ),
};

export const ValueProposition: Story = {
  render: () => (
    <ValuePropositionSlide
      title="Value proposition"
      statement="Make the next good slide easy to create, review, and reuse."
    />
  ),
};

export const CustomerPersona: Story = {
  render: () => (
    <CustomerPersonaSlide
      title="Customer persona"
      persona={{
        name: "Marta, platform lead",
        role: "Owns internal developer experience",
        bio: "Needs reliable technical communication that can be reused across teams.",
        needs: ["Fast authoring", "Consistent visuals", "Low maintenance"],
        pains: ["One-off decks", "Hard-to-review screenshots"],
      }}
    />
  ),
};

export const MarketOpportunity: Story = {
  render: () => (
    <MarketOpportunitySlide
      title="Market opportunity"
      tam="€9.4B"
      sam="€1.8B"
      som="€220M"
    />
  ),
};

export const CompetitiveLandscape: Story = {
  render: () => (
    <CompetitiveLandscapeSlide
      title="Competitive landscape"
      columns={[
        { key: "dimension", label: "Dimension" },
        { key: "system", label: "Design system" },
        { key: "statusquo", label: "Status quo" },
      ]}
      rows={[
        { dimension: "Speed", system: "Template-driven", statusquo: "Manual" },
        {
          dimension: "Quality",
          system: "Reviewable",
          statusquo: "Inconsistent",
        },
        { dimension: "Reuse", system: "Shared", statusquo: "Copied" },
      ]}
    />
  ),
};

export const BusinessModel: Story = {
  render: () => (
    <BusinessModelSlide
      title="Business model"
      parts={[
        { title: "Revenue", description: "Sponsorship and services." },
        { title: "Operations", description: "Community-led maintenance." },
        {
          title: "Distribution",
          description: "Open-source package and examples.",
        },
      ]}
    />
  ),
};

export const ProductRoadmap: Story = {
  render: () => (
    <ProductRoadmapSlide
      title="Product roadmap"
      items={[
        { title: "Now", description: "Core templates" },
        { title: "Next", description: "Deck examples" },
        { title: "Later", description: "Export pipeline" },
      ]}
    />
  ),
};

export const CaseStudy: Story = {
  render: () => (
    <CaseStudySlide
      title="Case study"
      parts={[
        { title: "Customer", description: "Developer platform team." },
        {
          title: "Implementation",
          description: "Moved reports to reusable layouts.",
        },
        {
          title: "Outcome",
          description: "Faster review and clearer narrative.",
        },
      ]}
    />
  ),
};

export const Testimonial: Story = {
  render: () => (
    <TestimonialSlide
      quote="We stopped discussing spacing and started discussing the actual message."
      attribution="Platform engineering lead"
    />
  ),
};
