import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AreaChartSlide,
  BarChartSlide,
  DonutChartSlide,
  HeatmapSlide,
  KPIDashboardSlide,
  LineChartSlide,
  PieChartSlide,
  SankeyDiagramSlide,
  ScatterPlotSlide,
  StackedBarChartSlide,
  TableSlide,
  TreemapSlide,
} from "./catalog";

const meta = {
  title: "Layouts/Data Visualization",
  parameters: { layout: "fullscreen" },
  tags: ["ai-generated"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { label: "Q1", value: 18, secondary: 32 },
  { label: "Q2", value: 34, secondary: 28 },
  { label: "Q3", value: 28, secondary: 46 },
  { label: "Q4", value: 52, secondary: 35 },
];

const dashboardMetrics = [
  { value: "50k", label: "Users", detail: "Across community events" },
  { value: "93%", label: "Retention", detail: "Year over year" },
];

export const DataTable: Story = {
  render: () => (
    <TableSlide
      title="Competitive landscape"
      columns={[
        { key: "area", label: "Area" },
        { key: "us", label: "Us" },
        { key: "alt", label: "Alternative" },
      ]}
      rows={[
        { area: "Authoring", us: "Typed layouts", alt: "Manual styling" },
        { area: "Review", us: "Screenshotable", alt: "Hard to compare" },
        { area: "Reuse", us: "Shared package", alt: "Copy paste" },
      ]}
    />
  ),
};

export const LineChart: Story = {
  render: () => <LineChartSlide title="Trend" data={data} />,
};

export const BarChart: Story = {
  render: () => <BarChartSlide title="Quarterly growth" data={data} />,
};

export const StackedBarChart: Story = {
  render: () => <StackedBarChartSlide title="Composition" data={data} />,
};

export const AreaChart: Story = {
  render: () => <AreaChartSlide title="Accumulated activity" data={data} />,
};

export const PieChart: Story = {
  render: () => <PieChartSlide title="Share of usage" data={data} />,
};

export const DonutChart: Story = {
  render: () => <DonutChartSlide title="Channel mix" data={data} />,
};

export const ScatterPlot: Story = {
  render: () => <ScatterPlotSlide title="Correlation" data={data} />,
};

export const Heatmap: Story = {
  render: () => <HeatmapSlide title="Activity heatmap" data={data} />,
};

export const Sankey: Story = {
  render: () => <SankeyDiagramSlide title="Flow visualization" data={data} />,
};

export const Treemap: Story = {
  render: () => <TreemapSlide title="Portfolio proportions" data={data} />,
};

export const KPIDashboard: Story = {
  render: () => (
    <KPIDashboardSlide
      title="KPI dashboard"
      metrics={dashboardMetrics}
      data={data}
    />
  ),
};
