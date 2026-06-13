import { type Deck } from "../types";
import { CoverSlide } from "@atlantic-community-slides/ui/layouts/cover-slide";
import { BigTitleSlide } from "@atlantic-community-slides/ui/layouts/big-title-slide";
import { TitleBodySlide } from "@atlantic-community-slides/ui/layouts/title-body-slide";
import { TitleBodyImageSlide } from "@atlantic-community-slides/ui/layouts/title-body-image-slide";
import { TitleBodyImageStackSlide } from "@atlantic-community-slides/ui/layouts/title-body-image-stack-slide";
import { SideBySideSlide } from "@atlantic-community-slides/ui/layouts/side-by-side-slide";
import { ThreeColumnSlide } from "@atlantic-community-slides/ui/layouts/three-column-slide";
import { GridSlide } from "@atlantic-community-slides/ui/layouts/grid-slide";
import { StatementSlide } from "@atlantic-community-slides/ui/layouts/statement-slide";
import { BigStatSlide } from "@atlantic-community-slides/ui/layouts/big-stat-slide";
import { PeopleSlide } from "@atlantic-community-slides/ui/layouts/people-slide";
import { LogoWallSlide } from "@atlantic-community-slides/ui/layouts/logo-wall-slide";

import { SlideText } from "@atlantic-community-slides/ui/components/slide-text";
import { SlideImage } from "@atlantic-community-slides/ui/components/slide-image";
import { SlideLink } from "@atlantic-community-slides/ui/components/slide-link";

// Shared placeholder images
const img1 =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1280&h=720";
const img2 =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1280&h=720";
const img3 =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1280&h=720";
const avatar =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256";

export const loremIpsum: Deck = {
  meta: {
    id: "lorem-ipsum",
    title: "Comprehensive Slide Examples",
    description:
      "A complete reference deck showcasing every available layout and component in the system.",
    date: "2026-06-13",
    tags: ["Design System", "Examples", "Documentation"],
  },
  slides: [
    // 1. Cover
    <CoverSlide
      key="cover"
      title="Sample Deck Examples"
      subtitle="A comprehensive showcase of all available slide layouts"
      metaLabel="Design System"
      metaLines={["Components & Layouts", "Version 1.0"]}
      email="hello@example.com"
    />,

    // 2. Statement (Centered logo, large text)
    <StatementSlide key="statement">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </StatementSlide>,

    // 3. Big Title
    <BigTitleSlide
      key="big-title"
      title={
        <>
          Lorem Ipsum
          <br />
          Dolor Sit Amet
        </>
      }
      footer={
        <SlideText muted>An introductory layout for new sections.</SlideText>
      }
    />,

    // 4. Title Body
    <TitleBodySlide key="title-body" title="Standard Title Body">
      <SlideText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SlideText>
      <SlideText>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </SlideText>
      <SlideText muted>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </SlideText>
    </TitleBodySlide>,

    // 5. Title Body Image
    <TitleBodyImageSlide
      key="title-body-img"
      title="Content with Image"
      image={{
        src: img1,
        alt: "Meeting",
      }}
    >
      <SlideText>
        This layout combines standard text blocks on one side with a large image
        taking up the rest of the available space.
      </SlideText>
      <SlideText>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </SlideText>
    </TitleBodyImageSlide>,

    // 6. Title Body Image Stack
    <TitleBodyImageStackSlide
      key="title-body-img-stack"
      title="Stacked Image Layout"
      images={[
        { src: img2, alt: "Workshop" },
        { src: img3, alt: "Team" },
      ]}
    >
      <SlideText>
        Sometimes one image isn&apos;t enough. This layout provides a stack of
        two vertical images next to the content.
      </SlideText>
      <SlideText>
        Perfect for showing contrast, before/after states, or complementary
        concepts.
      </SlideText>
    </TitleBodyImageStackSlide>,

    // 7. Side By Side
    <SideBySideSlide
      key="side-by-side"
      title="Side By Side Comparison"
      body={
        <SlideText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          porttitor sem.
        </SlideText>
      }
      right={
        <SlideText>
          Suspendisse potenti. Mauris accumsan non augue sed consequat. Nullam
          rutrum arcu in magna.
        </SlideText>
      }
    />,

    // 8. Three Column
    <ThreeColumnSlide
      key="three-col"
      title="Three Pillars"
      columns={[
        {
          heading: "First Pillar",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          heading: "Second Pillar",
          body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          heading: "Third Pillar",
          body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
      ]}
    />,

    // 9. Grid Slide (4 Columns)
    <GridSlide key="grid-4" columns={4} gap={32} alignItems="start">
      <SlideText>
        <strong>Phase 1:</strong>
        <br />
        Discovery & Research to understand the problem space.
      </SlideText>
      <SlideText>
        <strong>Phase 2:</strong>
        <br />
        Design & Prototyping iterating on potential solutions.
      </SlideText>
      <SlideText>
        <strong>Phase 3:</strong>
        <br />
        Development & Testing bringing the vision to life.
      </SlideText>
      <SlideText>
        <strong>Phase 4:</strong>
        <br />
        Launch & Evaluation monitoring the success metrics.
      </SlideText>
    </GridSlide>,

    // 10. Big Stat Slide
    <BigStatSlide
      key="big-stat"
      value="85%"
      label="Efficiency Increase"
      context="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />,

    // 11. People Slide
    <PeopleSlide
      key="people"
      title="Meet the Team"
      lead="Our diverse group of professionals."
      rows={[2, 3]} // 5 people total
      people={[
        { name: "Alice Doe", src: avatar },
        { name: "Bob Smith", src: avatar },
        { name: "Charlie Brown", src: avatar },
        { name: "Diana Prince", src: avatar },
        { name: "Eve Adams", src: avatar },
      ]}
    />,

    // 12. Logo Wall
    <LogoWallSlide
      key="logo-wall"
      title="Our Partners"
      logos={[
        { src: avatar, alt: "Partner 1" },
        { src: avatar, alt: "Partner 2" },
        { src: avatar, alt: "Partner 3" },
        { src: avatar, alt: "Partner 4" },
        { src: avatar, alt: "Partner 5" },
        { src: avatar, alt: "Partner 6" },
        { src: avatar, alt: "Partner 7" },
        { src: avatar, alt: "Partner 8" },
      ]}
    />,

    // 13. Grid Slide (6 Columns with images)
    <GridSlide key="grid-6" columns={6} gap={16}>
      {Array.from({ length: 12 }).map((_, i) => (
        <SlideImage
          key={i}
          src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=400`}
          alt={`Grid Image ${i}`}
          style={{
            width: "100%",
            aspectRatio: "1",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      ))}
    </GridSlide>,

    // 14. Closing
    <BigTitleSlide
      key="closing"
      title={
        <>
          Thank You
          <br />
          Any Questions?
        </>
      }
      footer={
        <SlideLink href="mailto:hello@example.com" tone="white">
          hello@example.com
        </SlideLink>
      }
    />,
  ],
};
