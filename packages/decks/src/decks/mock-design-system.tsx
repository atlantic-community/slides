import {
  AgendaSlide,
  APIExampleSlide,
  ArchitectureDiagramSlide,
  ArchitectureEvolutionSlide,
  AreaChartSlide,
  BarChartSlide,
  BeforeAfterVisualSlide,
  BigNumberSlide,
  BusinessModelSlide,
  CallToActionSlide,
  CaseStudySlide,
  ChallengeSlide,
  ChartSlide,
  CodeBlockSlide,
  CommunityShowcaseSlide,
  ComparisonSlide,
  CompetitiveLandscapeSlide,
  ConclusionSlide,
  ContactSlide,
  CustomerPersonaSlide,
  DataFlowDiagramSlide,
  DecisionRecordSlide,
  DecisionTreeSlide,
  DemoSlide,
  DiffViewSlide,
  DiscussionSlide,
  DonutChartSlide,
  EcosystemMapSlide,
  EventScheduleSlide,
  FAQSlide,
  FeatureListSlide,
  FunnelSlide,
  HeatmapSlide,
  ImageSlide,
  JourneyMapSlide,
  KPIDashboardSlide,
  KeyInsightSlide,
  KeyTakeawaySlide,
  LessonsLearnedSlide,
  LimitationsSlide,
  LineChartSlide,
  MarketOpportunitySlide,
  MethodologySlide,
  MilestonesSlide,
  MindMapSlide,
  MythRealitySlide,
  OpenSourceProjectCardSlide,
  OrganizationChartSlide,
  PartnerShowcaseSlide,
  PhotoGallerySlide,
  PieChartSlide,
  ProblemStatementSlide,
  ProcessDiagramSlide,
  ProductRoadmapSlide,
  ProsConsSlide,
  QRCodeSlide,
  QuoteSlide,
  RecapSlide,
  ReferencesSlide,
  RepositorySlide,
  ResearchQuestionSlide,
  ResultsSlide,
  SankeyDiagramSlide,
  ScatterPlotSlide,
  ScreenshotSlide,
  SectionDivider,
  SequenceDiagramSlide,
  SolutionSlide,
  SpeakerCardSlide,
  SponsorGridSlide,
  StackedBarChartSlide,
  StatementSlide,
  StatisticsGridSlide,
  StructuredThreePartSlide,
  TableSlide,
  TeamSlide,
  TerminalWindowSlide,
  TestimonialSlide,
  TextImageSlide,
  TextSlide,
  ThankYouSlide,
  TimelineSlide,
  TitleSlide,
  TreemapSlide,
  ValuePropositionSlide,
  VideoSlide,
} from "@atlantic-community-slides/ui/layouts/catalog";

import { type Deck } from "../types";

const lipsum =
  "A good slide template should make the important idea obvious before the presenter starts explaining it.";

const bullets = [
  "Use one message per slide",
  "Keep supporting detail close to the visual",
  "Reserve blue for active state or direction",
];

const namedItems = [
  { title: "Signal", description: "Lead with the decision or result." },
  {
    title: "Structure",
    description: "Group related content into clear zones.",
  },
  {
    title: "Evidence",
    description: "Use numbers, examples, or visuals to prove it.",
  },
];

const fourSteps = [
  {
    title: "Brief",
    description: "Define audience, goal, and one key takeaway.",
  },
  { title: "Frame", description: "Choose the layout that fits the argument." },
  {
    title: "Design",
    description: "Tighten hierarchy, rhythm, and supporting proof.",
  },
  {
    title: "Ship",
    description: "Export high-resolution assets and review the deck.",
  },
];

const metrics = [
  { value: "42%", label: "Less editing", detail: "Reusable layout decisions" },
  {
    value: "8.4k",
    label: "Slides exported",
    detail: "Across events and workshops",
  },
  { value: "91", label: "Templates", detail: "Covered in one visual system" },
  { value: "3x", label: "Faster review", detail: "With screenshot QA loops" },
];

const chartData = [
  { label: "Q1", value: 18, secondary: 32 },
  { label: "Q2", value: 34, secondary: 28 },
  { label: "Q3", value: 28, secondary: 46 },
  { label: "Q4", value: 52, secondary: 35 },
];

const tableColumns = [
  { key: "topic", label: "Topic" },
  { key: "one", label: "Option A" },
  { key: "two", label: "Option B" },
];

const tableRows = [
  { topic: "Speed", one: "Manual layout", two: "Reusable template" },
  { topic: "Quality", one: "Ad hoc styling", two: "Token-driven system" },
  { topic: "Scale", one: "One deck", two: "Every community talk" },
];

export const mockDesignSystemDeck: Deck = {
  meta: {
    id: "mock-design-system",
    title: "Mock Design System Deck",
    subtitle: "A comprehensive tour of every reusable slide template",
    description:
      "System deck that exercises the full reusable slide layout catalog.",
    date: "June 2026",
    tags: ["mock", "design-system", "layouts"],
  },
  slides: [
    <TitleSlide
      key="title"
      eyebrow="Mock deck"
      title="Reusable slide system"
      subtitle="A broad design-system deck for testing every reusable presentation layout."
      presenter="Atlantic Community"
      event="Design system review"
    />,
    <SectionDivider
      key="section-core"
      eyebrow="Chapter 01"
      title="Core content"
      subtitle="Common presentation building blocks."
    />,
    <AgendaSlide
      key="agenda"
      title="Agenda"
      variant="timeline"
      current={1}
      items={["Brief", "Design", "Review", "Ship"]}
    />,
    <TextSlide key="text-bullets" title="Text slide" items={bullets} />,
    <TextSlide key="text-paragraph" title="Paragraph slide" body={lipsum} />,
    <TextImageSlide
      key="text-image"
      title="Text and image"
      body={lipsum}
      items={bullets}
      imageLabel={null}
    />,
    <ImageSlide
      key="image"
      title="Image slide"
      caption="A restrained visual field supports the written argument."
      variant="framed"
    />,
    <ImageSlide
      key="image-full"
      title="Full bleed image"
      caption="Full-bleed media turns the slide into atmosphere and evidence."
      variant="full-bleed"
    />,
    <QuoteSlide
      key="quote"
      context="Quote"
      quote="The template should disappear, leaving only the argument."
      attribution="Design review note"
    />,
    <BigNumberSlide
      key="big-number"
      title="Big number"
      value="80%"
      label="Slides reviewed through image export"
      detail="Visual QA before final delivery"
    />,
    <StatisticsGridSlide
      key="statistics"
      title="Statistics grid"
      metrics={metrics}
    />,
    <FeatureListSlide
      key="features"
      title="Feature list"
      features={namedItems}
      variant="icons"
    />,
    <ComparisonSlide
      key="comparison"
      title="Comparison"
      left={{ title: "Before", description: "Manual styling per slide." }}
      right={{ title: "After", description: "Shared templates and tokens." }}
    />,
    <ProsConsSlide
      key="pros-cons"
      title="Pros and cons"
      pros={["Fast authoring", "Consistent exports", "Reviewable screenshots"]}
      cons={[
        "Needs strong defaults",
        "Requires template coverage",
        "Benefits from QA",
      ]}
    />,
    <FAQSlide
      key="faq"
      title="FAQ"
      items={[
        {
          title: "What is this deck?",
          description: "A coverage test for layouts.",
        },
        {
          title: "Why code-first?",
          description: "Templates keep content portable.",
        },
        {
          title: "What comes next?",
          description: "Review exports and tighten templates.",
        },
      ]}
    />,
    <SectionDivider
      key="section-flow"
      eyebrow="Chapter 02"
      title="Process and flow"
      subtitle="Progressions, journeys, funnels, and decisions."
    />,
    <ProcessDiagramSlide
      key="process"
      title="Process diagram"
      steps={fourSteps}
    />,
    <TimelineSlide key="timeline" title="Timeline" items={fourSteps} />,
    <MilestonesSlide key="milestones" title="Milestones" items={fourSteps} />,
    <JourneyMapSlide key="journey" title="Journey map" stages={fourSteps} />,
    <FunnelSlide key="funnel" title="Funnel" stages={fourSteps} />,
    <DecisionTreeSlide
      key="decision-tree"
      title="Decision tree"
      root="Does the slide need evidence?"
      branches={namedItems}
    />,
    <SectionDivider
      key="section-diagrams"
      eyebrow="Chapter 03"
      title="Diagrams"
      subtitle="Systems, relationships, and structure."
    />,
    <ArchitectureDiagramSlide
      key="architecture"
      title="Architecture diagram"
      nodes={namedItems}
    />,
    <DataFlowDiagramSlide
      key="data-flow"
      title="Data flow diagram"
      nodes={namedItems}
    />,
    <SequenceDiagramSlide
      key="sequence"
      title="Sequence diagram"
      actors={["Alpha", "Beta", "Gamma"]}
      messages={["request", "process", "respond", "confirm"]}
    />,
    <OrganizationChartSlide
      key="org-chart"
      title="Organization chart"
      people={[
        { name: "Design Team", role: "Template system" },
        { name: "Content Team", role: "Deck authoring" },
        { name: "Review Team", role: "Export QA" },
      ]}
    />,
    <MindMapSlide
      key="mind-map"
      title="Mind map"
      center="Deck"
      items={fourSteps}
    />,
    <EcosystemMapSlide
      key="ecosystem"
      title="Ecosystem map"
      center="Community"
      items={fourSteps}
    />,
    <SectionDivider
      key="section-data"
      eyebrow="Chapter 04"
      title="Data visualization"
      subtitle="Tables, charts, and dashboard compositions."
    />,
    <TableSlide
      key="table"
      title="Table"
      columns={tableColumns}
      rows={tableRows}
    />,
    <ChartSlide
      key="chart-generic"
      title="Generic chart"
      data={chartData}
      variant="bar"
    />,
    <LineChartSlide key="line" title="Line chart" data={chartData} />,
    <BarChartSlide key="bar" title="Bar chart" data={chartData} />,
    <StackedBarChartSlide
      key="stacked"
      title="Stacked bar chart"
      data={chartData}
    />,
    <AreaChartSlide key="area" title="Area chart" data={chartData} />,
    <PieChartSlide key="pie" title="Pie chart" data={chartData} />,
    <DonutChartSlide key="donut" title="Donut chart" data={chartData} />,
    <ScatterPlotSlide key="scatter" title="Scatter plot" data={chartData} />,
    <HeatmapSlide key="heatmap" title="Heatmap" data={chartData} />,
    <SankeyDiagramSlide key="sankey" title="Sankey diagram" data={chartData} />,
    <TreemapSlide key="treemap" title="Treemap" data={chartData} />,
    <KPIDashboardSlide
      key="kpi"
      title="KPI dashboard"
      metrics={metrics.slice(0, 2)}
      data={chartData}
    />,
    <SectionDivider
      key="section-technical"
      eyebrow="Chapter 05"
      title="Technical"
      subtitle="Code, terminal output, APIs, repositories, and records."
    />,
    <CodeBlockSlide
      key="code"
      title="Code block"
      highlight={[4, 8]}
      code={`type SlideState = {
  id: string;
  title: string;
  exported: boolean;
};

export function nextSlide(slides: SlideState[], index: number) {
  const next = Math.min(index + 1, slides.length - 1);
  return slides[next];
}

console.log(nextSlide(deck.slides, 0).title);`}
    />,
    <TerminalWindowSlide
      key="terminal"
      title="Terminal window"
      command="pnpm --filter player build"
      output={`> player@0.1.0 build
✓ Compiled successfully
✓ Generated static deck pages
done in 4.8s`}
    />,
    <DiffViewSlide
      key="diff"
      title="Diff view"
      before={`<SlideTitle title="Quarterly update" />
<TextBlock>All metrics are shown below.</TextBlock>`}
      after={`<SlideTitle
  eyebrow="Q4 review"
  title="Revenue grew 42%"
/>
<TextBlock tone="muted">Net retention drove the gain.</TextBlock>`}
    />,
    <APIExampleSlide
      key="api"
      title="API example"
      request={`POST /api/decks/mock-design-system/export
{ "format": "images", "scale": 2 }`}
      response={`201 Created
{ "slides": 99, "width": 2560, "height": 1440 }`}
    />,
    <RepositorySlide
      key="repository"
      title="Repository slide"
      url="atlantic.community/slides"
      cta="Scan for source, examples, and exported slide assets."
    />,
    <OpenSourceProjectCardSlide
      key="oss"
      title="Open source project card"
      project={{
        title: "Deck UI",
        description: "Consectetur adipiscing elit.",
        license: "MIT",
        language: "TypeScript",
        contributors: "42 contributors",
        repository: "atlantic.community/deck-ui",
      }}
    />,
    <ArchitectureEvolutionSlide
      key="evolution"
      title="Architecture evolution"
      versions={namedItems}
    />,
    <DecisionRecordSlide
      key="decision-record"
      title="Decision record"
      problem="Slide exports must look like finished deck assets, not player screenshots."
      alternatives={bullets}
      decision="Hide controls, keep progress, export high-resolution PNGs."
      consequences="Reviewers can inspect slide design without UI chrome noise."
    />,
    <StructuredThreePartSlide
      key="structured"
      title="Structured three-part slide"
      parts={namedItems}
    />,
    <SectionDivider
      key="section-product"
      eyebrow="Chapter 06"
      title="Product and startup"
      subtitle="Problems, personas, opportunities, and roadmaps."
    />,
    <ProblemStatementSlide
      key="problem"
      title="Problem statement"
      parts={namedItems}
    />,
    <SolutionSlide key="solution" title="Solution slide" parts={namedItems} />,
    <ValuePropositionSlide
      key="value"
      title="Value proposition"
      statement="Build technical decks with consistent hierarchy, rhythm, and export quality."
    />,
    <CustomerPersonaSlide
      key="persona"
      title="Customer persona"
      persona={{
        name: "Community Organizer",
        role: "Workshop host",
        bio: "Needs polished decks without rebuilding layout rules every event.",
        needs: bullets,
        pains: [
          "Last-minute edits",
          "Inconsistent templates",
          "Low-resolution exports",
        ],
      }}
    />,
    <MarketOpportunitySlide
      key="market"
      title="Market opportunity"
      tam="€9B"
      sam="€1.2B"
      som="€80M"
    />,
    <CompetitiveLandscapeSlide
      key="competitive"
      title="Competitive landscape"
      columns={tableColumns}
      rows={tableRows}
    />,
    <BusinessModelSlide
      key="business"
      title="Business model"
      parts={namedItems}
    />,
    <ProductRoadmapSlide
      key="roadmap"
      title="Product roadmap"
      items={fourSteps}
    />,
    <CaseStudySlide key="case-study" title="Case study" parts={namedItems} />,
    <TestimonialSlide
      key="testimonial"
      quote="The deck looked consistent before we touched the final copy."
      attribution="Workshop organizer"
    />,
    <SectionDivider
      key="section-research"
      eyebrow="Chapter 07"
      title="Research and academic"
      subtitle="Questions, methodology, findings, and limits."
    />,
    <ResearchQuestionSlide
      key="research-question"
      title="Research question"
      statement="Which template decisions make a technical community deck feel studio-designed?"
    />,
    <MethodologySlide
      key="methodology"
      title="Methodology"
      parts={namedItems}
    />,
    <ResultsSlide
      key="results"
      title="Results"
      metrics={metrics.slice(0, 3)}
    />,
    <DiscussionSlide key="discussion" title="Discussion" body={lipsum} />,
    <ReferencesSlide key="references" title="References" items={bullets} />,
    <LimitationsSlide key="limitations" title="Limitations" items={bullets} />,
    <SectionDivider
      key="section-story"
      eyebrow="Chapter 08"
      title="Storytelling"
      subtitle="Challenge, lessons, insights, and takeaways."
    />,
    <ChallengeSlide key="challenge" title="Challenge" parts={namedItems} />,
    <LessonsLearnedSlide
      key="lessons"
      title="Lessons learned"
      parts={namedItems}
    />,
    <MythRealitySlide
      key="myth"
      title="Myth vs reality"
      left={{ title: "Myth", description: "Templates make decks generic." }}
      right={{
        title: "Reality",
        description: "Good templates preserve intent.",
      }}
    />,
    <KeyInsightSlide
      key="insight"
      title="Key insight"
      statement="Design quality comes from repeated layout decisions, not one-off decoration."
    />,
    <KeyTakeawaySlide
      key="takeaway"
      title="Key takeaway"
      statement="One slide. One idea. Enough proof to believe it."
    />,
    <ConclusionSlide
      key="conclusion"
      title="Conclusion"
      statement="Treat slides as a product surface, then review them like one."
    />,
    <SectionDivider
      key="section-community"
      eyebrow="Chapter 09"
      title="Event and community"
      subtitle="Speakers, sponsors, schedules, teams, and partners."
    />,
    <SpeakerCardSlide
      key="speaker"
      title="Speaker card"
      speaker={{
        name: "Maya Chen",
        role: "Design systems lead",
        bio: "Builds reusable interfaces for talks, workshops, and community events.",
      }}
    />,
    <SponsorGridSlide
      key="sponsors"
      title="Sponsor grid"
      sponsors={[
        "Atlas",
        "Northstar",
        "Studio",
        "Cloud",
        "Labs",
        "Works",
        "Forge",
        "Collective",
        "Guild",
      ]}
    />,
    <EventScheduleSlide
      key="schedule"
      title="Event schedule"
      rows={[
        { title: "09:00", description: "Doors and coffee" },
        { title: "10:30", description: "Template deep dive" },
        { title: "12:00", description: "Export review" },
      ]}
    />,
    <CommunityShowcaseSlide
      key="community"
      title="Community showcase"
      features={namedItems}
    />,
    <TeamSlide
      key="team"
      title="Team slide"
      people={[
        { name: "Ari", role: "Design" },
        { name: "Bea", role: "Content" },
        { name: "Cam", role: "QA" },
      ]}
    />,
    <PartnerShowcaseSlide
      key="partners"
      title="Partner showcase"
      sponsors={["Civic Lab", "Open Cloud", "Makers Hub", "Design Guild"]}
    />,
    <QRCodeSlide
      key="qr"
      title="QR code slide"
      url="atlantic.community/slides"
      cta="Scan for deck resources, source code, and exported images."
    />,
    <SectionDivider
      key="section-media"
      eyebrow="Chapter 10"
      title="Media"
      subtitle="Screenshots, video, demos, galleries, and before/after visuals."
    />,
    <ScreenshotSlide
      key="screenshot-browser"
      title="Screenshot"
      variant="browser"
    />,
    <ScreenshotSlide
      key="screenshot-mobile"
      title="Mobile screenshot"
      variant="mobile"
    />,
    <VideoSlide
      key="video"
      title="Video slide"
      caption="Use video when motion proves what static screenshots cannot."
    />,
    <DemoSlide
      key="demo"
      title="Demo slide"
      goal="Show the export path end to end."
      watch="Check title position, media labels, and progress indicator."
      action="Regenerate images and compare the contact sheet."
    />,
    <PhotoGallerySlide
      key="gallery"
      title="Photo gallery"
      variant="gallery"
      images={["Alpha", "Beta", "Gamma", "Delta"]}
    />,
    <BeforeAfterVisualSlide
      key="before-after"
      title="Before / after visual"
      left={{ title: "Before", description: "Raw draft layout." }}
      right={{ title: "After", description: "Reviewed template composition." }}
    />,
    <SectionDivider
      key="section-closing"
      eyebrow="Chapter 11"
      title="Closing"
      subtitle="Recap, action, contact, and thank you."
    />,
    <RecapSlide key="recap" title="Recap" items={bullets} />,
    <StatementSlide
      key="statement"
      title="Statement slide"
      statement="The best template is quiet until the presenter needs it."
    />,
    <CallToActionSlide
      key="cta"
      title="Call to action"
      statement="Join, contribute, subscribe, donate, or contact."
    />,
    <ContactSlide
      key="contact"
      title="Contact slide"
      url="hello@example.com"
      cta="Send deck feedback, source requests, or event questions."
    />,
    <ThankYouSlide
      key="thanks"
      title="Thank you"
      statement="Thank you. Keep the slides useful, legible, and sharp."
    />,
  ],
};
