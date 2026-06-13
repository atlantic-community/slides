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
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae arcu sed lorem luctus cursus.";

const bullets = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Integer vitae arcu sed lorem",
];

const namedItems = [
  { title: "Alpha", description: "Lorem ipsum dolor sit amet." },
  { title: "Beta", description: "Consectetur adipiscing elit." },
  { title: "Gamma", description: "Integer vitae arcu sed lorem." },
];

const fourSteps = [
  { title: "Collect", description: "Lorem ipsum dolor sit amet." },
  { title: "Analyze", description: "Consectetur adipiscing elit." },
  { title: "Compose", description: "Integer vitae arcu sed lorem." },
  { title: "Publish", description: "Donec dictum sem in lorem cursus." },
];

const metrics = [
  { value: "42%", label: "Lorem", detail: "Dolor sit amet" },
  { value: "8.4k", label: "Ipsum", detail: "Consectetur" },
  { value: "91", label: "Dolor", detail: "Adipiscing elit" },
  { value: "3x", label: "Amet", detail: "Integer vitae" },
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
  { topic: "Speed", one: "Lorem ipsum", two: "Dolor sit" },
  { topic: "Quality", one: "Amet elit", two: "Integer vitae" },
  { topic: "Scale", one: "Arcu sed", two: "Lorem cursus" },
];

export const mockDesignSystemDeck: Deck = {
  meta: {
    id: "mock-design-system",
    title: "Mock Design System Deck",
    subtitle: "A comprehensive lorem ipsum tour of every slide template",
    description:
      "Placeholder deck that exercises the full reusable slide layout catalog.",
    date: "June 2026",
    tags: ["mock", "design-system", "layouts"],
  },
  slides: [
    <TitleSlide
      key="title"
      eyebrow="Mock deck"
      title="Lorem ipsum slide system"
      subtitle="A broad placeholder deck for testing every reusable presentation layout."
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
      items={["Lorem", "Ipsum", "Dolor", "Amet"]}
    />,
    <TextSlide key="text-bullets" title="Text slide" items={bullets} />,
    <TextSlide key="text-paragraph" title="Paragraph slide" body={lipsum} />,
    <TextImageSlide
      key="text-image"
      title="Text and image"
      body={lipsum}
      items={bullets}
      imageLabel="Placeholder"
    />,
    <ImageSlide
      key="image"
      title="Image slide"
      caption="Lorem ipsum dolor sit amet."
      variant="framed"
    />,
    <ImageSlide
      key="image-full"
      title="Full bleed image"
      caption="Consectetur adipiscing elit."
      variant="full-bleed"
    />,
    <QuoteSlide
      key="quote"
      context="Quote"
      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      attribution="Placeholder Person"
    />,
    <BigNumberSlide
      key="big-number"
      title="Big number"
      value="80%"
      label="Lorem ipsum dolor sit amet"
      detail="Consectetur adipiscing elit."
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
      left={{ title: "Before", description: "Lorem ipsum dolor sit amet." }}
      right={{ title: "After", description: "Consectetur adipiscing elit." }}
    />,
    <ProsConsSlide
      key="pros-cons"
      title="Pros and cons"
      pros={["Lorem ipsum", "Dolor sit amet", "Integer vitae"]}
      cons={["Consectetur elit", "Arcu sed lorem", "Donec dictum"]}
    />,
    <FAQSlide
      key="faq"
      title="FAQ"
      items={[
        { title: "What is lorem?", description: "Ipsum dolor sit amet." },
        { title: "Why placeholders?", description: "Consectetur adipiscing." },
        { title: "What comes next?", description: "Integer vitae arcu." },
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
      root="Lorem ipsum dolor sit amet?"
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
        { name: "Alpha Team", role: "Lorem ipsum" },
        { name: "Beta Team", role: "Dolor sit amet" },
        { name: "Gamma Team", role: "Consectetur elit" },
      ]}
    />,
    <MindMapSlide
      key="mind-map"
      title="Mind map"
      center="Lorem"
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
      highlight={[2, 4]}
      code={`function lorem() {
  return "ipsum";
}

console.log(lorem());`}
    />,
    <TerminalWindowSlide
      key="terminal"
      title="Terminal window"
      command="npm run lorem"
      output={`> lorem@1.0.0 start
ipsum dolor sit amet
done`}
    />,
    <DiffViewSlide
      key="diff"
      title="Diff view"
      before={`const value = "lorem";`}
      after={`const value = "ipsum";
console.log(value);`}
    />,
    <APIExampleSlide
      key="api"
      title="API example"
      request={`POST /lorem
{ "ipsum": true }`}
      response={`201 Created
{ "dolor": "sit amet" }`}
    />,
    <RepositorySlide
      key="repository"
      title="Repository slide"
      url="example.com/lorem"
      cta="Scan for ipsum dolor sit amet."
    />,
    <OpenSourceProjectCardSlide
      key="oss"
      title="Open source project card"
      project={{
        title: "Lorem UI",
        description: "Consectetur adipiscing elit.",
        license: "MIT",
        language: "TypeScript",
        contributors: "42 contributors",
        repository: "example.com/lorem-ui",
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
      problem="Lorem ipsum dolor sit amet."
      alternatives={bullets}
      decision="Consectetur adipiscing elit."
      consequences="Integer vitae arcu sed lorem luctus cursus."
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
      statement="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />,
    <CustomerPersonaSlide
      key="persona"
      title="Customer persona"
      persona={{
        name: "Lorem Persona",
        role: "Ipsum operator",
        bio: "Dolor sit amet, consectetur adipiscing elit.",
        needs: bullets,
        pains: ["Aenean lorem", "Vivamus ipsum", "Donec dolor"],
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
      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      attribution="Customer Placeholder"
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
      statement="How does lorem ipsum influence placeholder presentation systems?"
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
      left={{ title: "Myth", description: "Lorem ipsum dolor sit amet." }}
      right={{ title: "Reality", description: "Consectetur adipiscing elit." }}
    />,
    <KeyInsightSlide
      key="insight"
      title="Key insight"
      statement="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />,
    <KeyTakeawaySlide
      key="takeaway"
      title="Key takeaway"
      statement="One sentence. One idea. Lorem ipsum."
    />,
    <ConclusionSlide
      key="conclusion"
      title="Conclusion"
      statement="Integer vitae arcu sed lorem luctus cursus."
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
        name: "Lorem Ipsum",
        role: "Placeholder speaker",
        bio: "Dolor sit amet, consectetur adipiscing elit.",
      }}
    />,
    <SponsorGridSlide
      key="sponsors"
      title="Sponsor grid"
      sponsors={[
        "Lorem",
        "Ipsum",
        "Dolor",
        "Amet",
        "Elit",
        "Arcu",
        "Vitae",
        "Cursus",
      ]}
    />,
    <EventScheduleSlide
      key="schedule"
      title="Event schedule"
      rows={[
        { title: "09:00", description: "Lorem ipsum" },
        { title: "10:30", description: "Dolor sit amet" },
        { title: "12:00", description: "Consectetur elit" },
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
        { name: "Alpha", role: "Lorem" },
        { name: "Beta", role: "Ipsum" },
        { name: "Gamma", role: "Dolor" },
      ]}
    />,
    <PartnerShowcaseSlide
      key="partners"
      title="Partner showcase"
      sponsors={["Alpha", "Beta", "Gamma", "Delta"]}
    />,
    <QRCodeSlide
      key="qr"
      title="QR code slide"
      url="example.com/lorem"
      cta="Scan for lorem ipsum resources."
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
      caption="Lorem ipsum dolor sit amet."
    />,
    <DemoSlide
      key="demo"
      title="Demo slide"
      goal="Lorem ipsum dolor sit amet."
      watch="Consectetur adipiscing elit."
      action="Integer vitae arcu sed lorem."
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
      left={{ title: "Before", description: "Lorem ipsum dolor sit amet." }}
      right={{ title: "After", description: "Consectetur adipiscing elit." }}
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
      statement="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
      cta="Lorem ipsum dolor sit amet."
    />,
    <ThankYouSlide
      key="thanks"
      title="Thank you"
      statement="Lorem ipsum dolor sit amet."
    />,
  ],
};
