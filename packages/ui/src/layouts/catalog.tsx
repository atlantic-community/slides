import { type ReactNode } from "react";

import {
  Chip,
  Metric,
  PlaceholderVisual,
  Slide,
  SlideTitle,
  TextBlock,
} from "../components/slide";
import {
  colors,
  fonts,
  radii,
  slide,
  space,
  type,
  weights,
} from "../components/tokens";

export interface NamedText {
  title: ReactNode;
  description?: ReactNode;
}

export interface MetricItem {
  value: ReactNode;
  label: ReactNode;
  detail?: ReactNode;
}

export interface PersonItem {
  name: ReactNode;
  role?: ReactNode;
  bio?: ReactNode;
}

export interface TableColumn {
  key: string;
  label: ReactNode;
}

export interface TableRow {
  [key: string]: ReactNode;
}

export interface ChartDatum {
  label: string;
  value: number;
  secondary?: number;
}

interface TemplateProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}

function Stack({
  children,
  gap = space.lg,
}: {
  children: ReactNode;
  gap?: number;
}) {
  return <div style={{ display: "grid", gap }}>{children}</div>;
}

function Card({
  children,
  emphasis = false,
}: {
  children: ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div
      style={{
        padding: space.lg,
        border: `1px solid ${emphasis ? colors.accent : colors.border}`,
        borderRadius: radii.md,
        background: colors.surface,
        minHeight: 118,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

function ItemCard({ item, index }: { item: NamedText; index?: number }) {
  return (
    <Card>
      {index !== undefined ? (
        <div
          style={{
            marginBottom: space.md,
            fontFamily: fonts.mono,
            fontSize: type.caption,
            color: colors.accent,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      ) : null}
      <div style={{ fontSize: type.heading, fontWeight: weights.bold }}>
        {item.title}
      </div>
      {item.description ? (
        <TextBlock tone="muted" size="caption" style={{ marginTop: space.sm }}>
          {item.description}
        </TextBlock>
      ) : null}
    </Card>
  );
}

function BulletList({
  items,
  ordered = false,
}: {
  items: ReactNode[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <List
      style={{
        margin: 0,
        paddingLeft: ordered ? 34 : 28,
        fontSize: type.lead,
        lineHeight: 1.38,
      }}
    >
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: space.md }}>
          {item}
        </li>
      ))}
    </List>
  );
}

function BasicSlide({
  eyebrow,
  title,
  subtitle,
  children,
}: TemplateProps & { children: ReactNode }) {
  return (
    <Slide>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
          gap: space["2xl"],
          height: "100%",
          paddingTop: 42,
        }}
      >
        <SlideTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        {children}
      </div>
    </Slide>
  );
}

export interface TitleSlideProps extends TemplateProps {
  presenter?: ReactNode;
  event?: ReactNode;
}

export function TitleSlide({
  eyebrow,
  title,
  subtitle,
  presenter,
  event,
}: TitleSlideProps) {
  return (
    <Slide brandPosition="bottom-left">
      <div
        style={{
          height: "100%",
          display: "grid",
          alignContent: "center",
          gap: space["3xl"],
        }}
      >
        <SlideTitle
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          size="display"
        />
        <div
          style={{ display: "flex", gap: space["2xl"], color: colors.muted }}
        >
          {presenter ? <TextBlock>{presenter}</TextBlock> : null}
          {event ? <TextBlock>{event}</TextBlock> : null}
        </div>
      </div>
    </Slide>
  );
}

export function SectionDivider({ eyebrow, title, subtitle }: TemplateProps) {
  return (
    <Slide brandPosition="bottom-right">
      <div
        style={{
          height: "100%",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
        }}
      >
        <SlideTitle
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          size="section"
          align="center"
        />
      </div>
    </Slide>
  );
}

export interface AgendaSlideProps extends TemplateProps {
  items: ReactNode[];
  variant?: "list" | "progress" | "timeline";
  current?: number;
}

export function AgendaSlide({
  eyebrow,
  title,
  subtitle,
  items,
  variant = "list",
  current = 0,
}: AgendaSlideProps) {
  return (
    <BasicSlide eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div style={{ alignSelf: "center" }}>
        {variant === "timeline" ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${items.length}, 1fr)`,
              gap: space.md,
            }}
          >
            {items.map((item, index) => (
              <Card key={index} emphasis={index === current}>
                <div style={{ fontFamily: fonts.mono, color: colors.accent }}>
                  {index + 1}
                </div>
                <div style={{ marginTop: space.md, fontSize: type.heading }}>
                  {item}
                </div>
              </Card>
            ))}
          </div>
        ) : variant === "progress" ? (
          <Stack gap={space.xl}>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: space.lg,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    color: index <= current ? colors.accent : colors.subtle,
                  }}
                >
                  {index + 1}
                </div>
                <div
                  style={{
                    height: 10,
                    borderRadius: radii.pill,
                    background: colors.surface,
                  }}
                >
                  <div
                    style={{
                      width: index <= current ? "100%" : "0%",
                      height: "100%",
                      borderRadius: radii.pill,
                      background: colors.accent,
                    }}
                  />
                </div>
                <div
                  style={{
                    gridColumn: "2",
                    marginTop: -space.lg,
                    fontSize: type.heading,
                  }}
                >
                  {item}
                </div>
              </div>
            ))}
          </Stack>
        ) : (
          <BulletList items={items} ordered />
        )}
      </div>
    </BasicSlide>
  );
}

export interface TextSlideProps extends TemplateProps {
  items?: ReactNode[];
  body?: ReactNode;
  ordered?: boolean;
}

export function TextSlide({
  eyebrow,
  title,
  subtitle,
  items,
  body,
  ordered = false,
}: TextSlideProps) {
  return (
    <BasicSlide eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div style={{ maxWidth: 940, alignSelf: "center" }}>
        {items ? (
          <BulletList items={items} ordered={ordered} />
        ) : (
          <TextBlock size="lead">{body}</TextBlock>
        )}
      </div>
    </BasicSlide>
  );
}

export interface TextImageSlideProps extends TemplateProps {
  body?: ReactNode;
  items?: ReactNode[];
  imageLabel?: ReactNode;
  imageSide?: "left" | "right";
}

export function TextImageSlide({
  eyebrow,
  title,
  subtitle,
  body,
  items,
  imageLabel,
  imageSide = "right",
}: TextImageSlideProps) {
  const visual = (
    <PlaceholderVisual label={imageLabel} variant="photo" seed={2} />
  );
  const text = (
    <Stack>
      {body ? <TextBlock size="lead">{body}</TextBlock> : null}
      {items ? <BulletList items={items} /> : null}
    </Stack>
  );
  return (
    <BasicSlide eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: space["2xl"],
          alignItems: "center",
        }}
      >
        {imageSide === "left" ? visual : text}
        {imageSide === "left" ? text : visual}
      </div>
    </BasicSlide>
  );
}

export interface ImageSlideProps extends TemplateProps {
  caption?: ReactNode;
  variant?: "full-bleed" | "framed" | "gallery";
  images?: ReactNode[];
}

export function ImageSlide({
  title,
  caption,
  variant = "framed",
  images = ["Image A", "Image B", "Image C", "Image D"],
}: ImageSlideProps) {
  if (variant === "full-bleed") {
    return (
      <Slide padded={false} brand={null}>
        <PlaceholderVisual
          label={title}
          variant="photo"
          seed={3}
          style={{ height: "100%", borderRadius: 0, border: 0 }}
        />
        {caption ? (
          <div
            style={{
              position: "absolute",
              left: slide.padding,
              bottom: slide.padding,
              maxWidth: 720,
            }}
          >
            <TextBlock size="caption">{caption}</TextBlock>
          </div>
        ) : null}
      </Slide>
    );
  }
  return (
    <BasicSlide title={title}>
      {variant === "gallery" ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: space.lg,
          }}
        >
          {images.map((image, index) => (
            <PlaceholderVisual key={index} label={image} seed={index} />
          ))}
        </div>
      ) : (
        <Stack>
          <PlaceholderVisual label={title} variant="photo" />
          {caption ? (
            <TextBlock size="caption" tone="muted">
              {caption}
            </TextBlock>
          ) : null}
        </Stack>
      )}
    </BasicSlide>
  );
}

export interface QuoteSlideProps {
  quote: ReactNode;
  attribution?: ReactNode;
  context?: ReactNode;
}

export function QuoteSlide({ quote, attribution, context }: QuoteSlideProps) {
  return (
    <Slide brandPosition="bottom-left">
      <div
        style={{
          height: "100%",
          display: "grid",
          alignContent: "center",
          maxWidth: 980,
        }}
      >
        {context ? <Chip tone="accent">{context}</Chip> : null}
        <blockquote
          style={{
            margin: `${space.xl}px 0 0`,
            fontSize: 52,
            lineHeight: 1.12,
            fontWeight: weights.bold,
          }}
        >
          “{quote}”
        </blockquote>
        {attribution ? (
          <TextBlock tone="muted" style={{ marginTop: space.xl }}>
            {attribution}
          </TextBlock>
        ) : null}
      </div>
    </Slide>
  );
}

export function BigNumberSlide({
  title,
  subtitle,
  value,
  label,
  detail,
}: TemplateProps & MetricItem) {
  return (
    <BasicSlide title={title} subtitle={subtitle}>
      <div style={{ alignSelf: "center" }}>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 154,
            lineHeight: 0.9,
            fontWeight: weights.bold,
          }}
        >
          {value}
        </div>
        <div
          style={{
            marginTop: space.lg,
            fontSize: type.subtitle,
            maxWidth: 820,
          }}
        >
          {label}
        </div>
        {detail ? (
          <TextBlock tone="muted" style={{ marginTop: space.md }}>
            {detail}
          </TextBlock>
        ) : null}
      </div>
    </BasicSlide>
  );
}

export function StatisticsGridSlide({
  title,
  subtitle,
  metrics,
}: TemplateProps & { metrics: MetricItem[] }) {
  return (
    <BasicSlide title={title} subtitle={subtitle}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: space.lg,
          alignSelf: "center",
        }}
      >
        {metrics.map((metric, index) => (
          <Metric key={index} {...metric} />
        ))}
      </div>
    </BasicSlide>
  );
}

export function FeatureListSlide({
  title,
  subtitle,
  features,
  variant = "cards",
}: TemplateProps & {
  features: NamedText[];
  variant?: "bullets" | "cards" | "icons";
}) {
  return (
    <BasicSlide title={title} subtitle={subtitle}>
      {variant === "bullets" ? (
        <BulletList items={features.map((feature) => feature.title)} />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: space.lg,
          }}
        >
          {features.map((feature, index) => (
            <ItemCard
              key={index}
              item={feature}
              index={variant === "icons" ? index : undefined}
            />
          ))}
        </div>
      )}
    </BasicSlide>
  );
}

export function ComparisonSlide({
  title,
  left,
  right,
}: {
  title: ReactNode;
  left: NamedText;
  right: NamedText;
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: space.xl,
          alignItems: "stretch",
        }}
      >
        <ItemCard item={left} />
        <ItemCard item={right} />
      </div>
    </BasicSlide>
  );
}

export function ProsConsSlide({
  title,
  pros,
  cons,
}: {
  title: ReactNode;
  pros: ReactNode[];
  cons: ReactNode[];
}) {
  return (
    <ComparisonSlide
      title={title}
      left={{ title: "Pros", description: <BulletList items={pros} /> }}
      right={{ title: "Cons", description: <BulletList items={cons} /> }}
    />
  );
}

export function FAQSlide({
  title,
  items,
}: {
  title: ReactNode;
  items: NamedText[];
}) {
  return (
    <BasicSlide title={title}>
      <div style={{ display: "grid", gap: space.md }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: space.lg,
              paddingBottom: space.md,
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ fontSize: type.heading, fontWeight: weights.bold }}>
              {item.title}
            </div>
            <TextBlock tone="muted">{item.description}</TextBlock>
          </div>
        ))}
      </div>
    </BasicSlide>
  );
}

export function ProcessDiagramSlide({
  title,
  steps,
}: {
  title: ReactNode;
  steps: NamedText[];
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: space.md,
          alignItems: "center",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns:
                index === steps.length - 1 ? "1fr" : "1fr 36px",
              gap: space.md,
              alignItems: "center",
            }}
          >
            <ItemCard item={step} index={index} />
            {index === steps.length - 1 ? null : (
              <div style={{ fontSize: type.heading, color: colors.accent }}>
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </BasicSlide>
  );
}

export function TimelineSlide({
  title,
  items,
}: {
  title: ReactNode;
  items: NamedText[];
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: `repeat(${items.length}, 1fr)`,
          gap: space.lg,
          alignItems: "start",
          paddingTop: space["2xl"],
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            height: 2,
            background: colors.border,
          }}
        />
        {items.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: radii.pill,
                background: colors.accent,
                marginBottom: space.lg,
              }}
            />
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </BasicSlide>
  );
}

export const MilestonesSlide = TimelineSlide;

export function JourneyMapSlide({
  title,
  stages,
}: {
  title: ReactNode;
  stages: NamedText[];
}) {
  return <TimelineSlide title={title} items={stages} />;
}

export function FunnelSlide({
  title,
  stages,
}: {
  title: ReactNode;
  stages: NamedText[];
}) {
  return (
    <BasicSlide title={title}>
      <Stack gap={space.sm}>
        {stages.map((stage, index) => (
          <div
            key={index}
            style={{
              width: `${100 - index * 10}%`,
              margin: "0 auto",
              padding: space.md,
              textAlign: "center",
              border: `1px solid ${colors.border}`,
              background: colors.surface,
              borderRadius: radii.md,
            }}
          >
            <div style={{ fontSize: type.heading, fontWeight: weights.bold }}>
              {stage.title}
            </div>
            {stage.description ? (
              <TextBlock size="caption" tone="muted">
                {stage.description}
              </TextBlock>
            ) : null}
          </div>
        ))}
      </Stack>
    </BasicSlide>
  );
}

export function DecisionTreeSlide({
  title,
  root,
  branches,
}: {
  title: ReactNode;
  root: ReactNode;
  branches: NamedText[];
}) {
  return (
    <BasicSlide title={title}>
      <Stack gap={space.xl}>
        <Card emphasis>
          <div
            style={{
              textAlign: "center",
              fontSize: type.heading,
              fontWeight: weights.bold,
            }}
          >
            {root}
          </div>
        </Card>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${branches.length}, 1fr)`,
            gap: space.lg,
          }}
        >
          {branches.map((branch, index) => (
            <ItemCard key={index} item={branch} />
          ))}
        </div>
      </Stack>
    </BasicSlide>
  );
}

export function ArchitectureDiagramSlide({
  title,
  nodes,
}: {
  title: ReactNode;
  nodes: NamedText[];
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: space.xl,
          alignItems: "center",
        }}
      >
        {nodes.map((node, index) => (
          <div key={index} style={{ display: "grid", gap: space.md }}>
            <ItemCard item={node} />
            {index < nodes.length - 1 ? (
              <div
                style={{
                  textAlign: "center",
                  color: colors.accent,
                  fontSize: type.heading,
                }}
              >
                ↓
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </BasicSlide>
  );
}

export const DataFlowDiagramSlide = ArchitectureDiagramSlide;

export function SequenceDiagramSlide({
  title,
  actors,
  messages,
}: {
  title: ReactNode;
  actors: string[];
  messages: string[];
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${actors.length}, 1fr)`,
          gap: space.lg,
          height: "100%",
        }}
      >
        {actors.map((actor, index) => (
          <div
            key={actor}
            style={{
              position: "relative",
              borderLeft: `1px solid ${colors.border}`,
              paddingLeft: space.md,
            }}
          >
            <Chip>{actor}</Chip>
            {messages.map((message, messageIndex) =>
              messageIndex % actors.length === index ? (
                <div
                  key={message}
                  style={{
                    marginTop: 34 + messageIndex * 22,
                    fontFamily: fonts.mono,
                    fontSize: type.caption,
                    color: colors.accent,
                  }}
                >
                  {message} →
                </div>
              ) : null,
            )}
          </div>
        ))}
      </div>
    </BasicSlide>
  );
}

export function OrganizationChartSlide({
  title,
  people,
}: {
  title: ReactNode;
  people: PersonItem[];
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: space.lg,
        }}
      >
        {people.map((person, index) => (
          <ItemCard
            key={index}
            item={{
              title: person.name,
              description: person.role ?? person.bio,
            }}
          />
        ))}
      </div>
    </BasicSlide>
  );
}

export function MindMapSlide({
  title,
  center,
  items,
}: {
  title: ReactNode;
  center: ReactNode;
  items: NamedText[];
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 220px 1fr",
          gap: space.xl,
          alignItems: "center",
        }}
      >
        <Stack>
          {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </Stack>
        <Card emphasis>
          <div
            style={{
              textAlign: "center",
              fontSize: type.heading,
              fontWeight: weights.bold,
            }}
          >
            {center}
          </div>
        </Card>
        <Stack>
          {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </Stack>
      </div>
    </BasicSlide>
  );
}

export const EcosystemMapSlide = MindMapSlide;

export function TableSlide({
  title,
  columns,
  rows,
}: {
  title: ReactNode;
  columns: TableColumn[];
  rows: TableRow[];
}) {
  return (
    <BasicSlide title={title}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: type.caption,
        }}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  textAlign: "left",
                  padding: space.md,
                  borderBottom: `1px solid ${colors.border}`,
                  color: colors.muted,
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  style={{
                    padding: space.md,
                    borderBottom: `1px solid ${colors.border}`,
                  }}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </BasicSlide>
  );
}

function MiniChart({
  data,
  variant,
}: {
  data: ChartDatum[];
  variant:
    | "line"
    | "bar"
    | "stacked"
    | "area"
    | "scatter"
    | "heatmap"
    | "sankey"
    | "treemap"
    | "pie"
    | "donut";
}) {
  const max = Math.max(...data.map((datum) => datum.value), 1);
  if (variant === "pie" || variant === "donut") {
    return (
      <div style={{ display: "grid", placeItems: "center", height: 360 }}>
        <div
          style={{
            width: 260,
            height: 260,
            borderRadius: radii.pill,
            background: `conic-gradient(${colors.accent} 0 42%, ${colors.success} 42% 68%, ${colors.warning} 68% 84%, ${colors.border} 84% 100%)`,
            boxShadow:
              variant === "donut"
                ? `inset 0 0 0 70px ${colors.background}`
                : undefined,
          }}
        />
      </div>
    );
  }
  if (variant === "heatmap" || variant === "treemap") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: space.sm,
        }}
      >
        {Array.from({ length: 24 }, (_, index) => (
          <div
            key={index}
            style={{
              height: variant === "treemap" ? 72 + (index % 3) * 20 : 48,
              background:
                index % 3 === 0
                  ? colors.accent
                  : index % 3 === 1
                    ? colors.surface
                    : colors.border,
              borderRadius: radii.sm,
            }}
          />
        ))}
      </div>
    );
  }
  if (variant === "sankey") {
    return (
      <PlaceholderVisual
        variant="chart"
        label="Sankey flow"
        aspectRatio="2 / 1"
      />
    );
  }
  return (
    <div
      style={{
        height: 360,
        display: "flex",
        alignItems: "end",
        gap: space.lg,
        borderLeft: `1px solid ${colors.border}`,
        borderBottom: `1px solid ${colors.border}`,
        padding: space.lg,
      }}
    >
      {data.map((datum) => {
        const height = `${Math.max((datum.value / max) * 100, 6)}%`;
        return (
          <div
            key={datum.label}
            style={{
              flex: 1,
              height:
                variant === "line" || variant === "scatter" ? "100%" : height,
              alignSelf: "end",
              position: "relative",
              background:
                variant === "bar" || variant === "stacked" || variant === "area"
                  ? colors.accent
                  : "transparent",
              borderRadius: radii.sm,
            }}
          >
            {variant === "line" || variant === "scatter" ? (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: height,
                  width: 16,
                  height: 16,
                  borderRadius: radii.pill,
                  background: colors.accent,
                }}
              />
            ) : null}
            {variant === "stacked" ? (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: `${datum.secondary ?? 35}%`,
                  background: colors.success,
                  borderRadius: radii.sm,
                }}
              />
            ) : null}
            <div
              style={{
                position: "absolute",
                bottom: -30,
                left: 0,
                right: 0,
                textAlign: "center",
                fontSize: type.footnote,
                color: colors.muted,
              }}
            >
              {datum.label}
            </div>
            <div
              style={{
                position: "absolute",
                top: -28,
                left: 0,
                right: 0,
                textAlign: "center",
                fontFamily: fonts.mono,
                fontSize: type.caption,
              }}
            >
              {datum.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ChartSlide({
  title,
  data,
  variant,
}: {
  title: ReactNode;
  data: ChartDatum[];
  variant:
    | "line"
    | "bar"
    | "stacked"
    | "area"
    | "pie"
    | "donut"
    | "scatter"
    | "heatmap"
    | "sankey"
    | "treemap";
}) {
  return (
    <BasicSlide title={title}>
      <MiniChart data={data} variant={variant} />
    </BasicSlide>
  );
}

export const LineChartSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="line" />;
export const BarChartSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="bar" />;
export const StackedBarChartSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="stacked" />;
export const AreaChartSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="area" />;
export const PieChartSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="pie" />;
export const DonutChartSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="donut" />;
export const ScatterPlotSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="scatter" />;
export const HeatmapSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="heatmap" />;
export const SankeyDiagramSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="sankey" />;
export const TreemapSlide = (
  props: Omit<Parameters<typeof ChartSlide>[0], "variant">,
) => <ChartSlide {...props} variant="treemap" />;

export function KPIDashboardSlide({
  title,
  metrics,
  data,
}: {
  title: ReactNode;
  metrics: MetricItem[];
  data: ChartDatum[];
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: space.xl,
        }}
      >
        <Stack>
          {metrics.map((metric, index) => (
            <Metric key={index} {...metric} />
          ))}
        </Stack>
        <MiniChart data={data} variant="bar" />
      </div>
    </BasicSlide>
  );
}

export function CodeBlockSlide({
  title,
  code,
  highlight = [],
}: {
  title: ReactNode;
  code: string;
  highlight?: number[];
}) {
  return (
    <BasicSlide title={title}>
      <pre
        style={{
          margin: 0,
          padding: space.xl,
          border: `1px solid ${colors.border}`,
          borderRadius: radii.md,
          background: colors.neutral100,
          fontFamily: fonts.mono,
          fontSize: type.code,
          lineHeight: 1.5,
          overflow: "hidden",
        }}
      >
        {code.split("\n").map((line, index) => (
          <div
            key={index}
            style={{
              background: highlight.includes(index + 1)
                ? colors.surface
                : undefined,
            }}
          >
            <span
              style={{
                color: colors.subtle,
                display: "inline-block",
                width: 34,
              }}
            >
              {index + 1}
            </span>
            {line}
          </div>
        ))}
      </pre>
    </BasicSlide>
  );
}

export function TerminalWindowSlide({
  title,
  command,
  output,
}: {
  title: ReactNode;
  command: ReactNode;
  output: ReactNode;
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          border: `1px solid ${colors.border}`,
          borderRadius: radii.md,
          overflow: "hidden",
          background: colors.neutral100,
          fontFamily: fonts.mono,
        }}
      >
        <div
          style={{
            padding: space.md,
            borderBottom: `1px solid ${colors.border}`,
            color: colors.muted,
          }}
        >
          $ {command}
        </div>
        <pre
          style={{
            margin: 0,
            padding: space.xl,
            fontSize: type.code,
            lineHeight: 1.5,
          }}
        >
          {output}
        </pre>
      </div>
    </BasicSlide>
  );
}

export function DiffViewSlide({
  title,
  before,
  after,
}: {
  title: ReactNode;
  before: string;
  after: string;
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: space.lg,
        }}
      >
        <CodeBlockSlide title="Before" code={before} />
        <CodeBlockSlide title="After" code={after} highlight={[1, 2]} />
      </div>
    </BasicSlide>
  );
}

export function APIExampleSlide({
  title,
  request,
  response,
}: {
  title: ReactNode;
  request: string;
  response: string;
}) {
  return (
    <ComparisonSlide
      title={title}
      left={{ title: "Request", description: <pre>{request}</pre> }}
      right={{ title: "Response", description: <pre>{response}</pre> }}
    />
  );
}

export function RepositorySlide({
  title,
  url,
  cta = "Scan or visit",
}: {
  title: ReactNode;
  url: ReactNode;
  cta?: ReactNode;
}) {
  return (
    <BasicSlide title={title} subtitle={url}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: space["2xl"],
          alignItems: "center",
        }}
      >
        <PlaceholderVisual variant="qr" label="QR" aspectRatio="1 / 1" />
        <TextBlock size="lead">{cta}</TextBlock>
      </div>
    </BasicSlide>
  );
}

export function OpenSourceProjectCardSlide({
  title,
  project,
}: {
  title: ReactNode;
  project: NamedText & {
    license?: ReactNode;
    language?: ReactNode;
    contributors?: ReactNode;
    repository?: ReactNode;
  };
}) {
  return (
    <BasicSlide title={title}>
      <Card emphasis>
        <SlideTitle
          title={project.title}
          subtitle={project.description}
          size="section"
        />
        <div
          style={{
            display: "flex",
            gap: space.md,
            marginTop: space.xl,
            flexWrap: "wrap",
          }}
        >
          {project.license ? <Chip>{project.license}</Chip> : null}
          {project.language ? (
            <Chip tone="accent">{project.language}</Chip>
          ) : null}
          {project.contributors ? <Chip>{project.contributors}</Chip> : null}
          {project.repository ? <Chip>{project.repository}</Chip> : null}
        </div>
      </Card>
    </BasicSlide>
  );
}

export function ArchitectureEvolutionSlide({
  title,
  versions,
}: {
  title: ReactNode;
  versions: NamedText[];
}) {
  return <ProcessDiagramSlide title={title} steps={versions} />;
}

export function DecisionRecordSlide({
  title,
  problem,
  alternatives,
  decision,
  consequences,
}: {
  title: ReactNode;
  problem: ReactNode;
  alternatives: ReactNode[];
  decision: ReactNode;
  consequences: ReactNode;
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: space.lg,
        }}
      >
        <ItemCard item={{ title: "Problem", description: problem }} />
        <ItemCard item={{ title: "Decision", description: decision }} />
        <ItemCard
          item={{
            title: "Alternatives",
            description: <BulletList items={alternatives} />,
          }}
        />
        <ItemCard item={{ title: "Consequences", description: consequences }} />
      </div>
    </BasicSlide>
  );
}

export function StructuredThreePartSlide({
  title,
  parts,
}: {
  title: ReactNode;
  parts: NamedText[];
}) {
  return <FeatureListSlide title={title} features={parts} variant="cards" />;
}

export const ProblemStatementSlide = StructuredThreePartSlide;
export const SolutionSlide = StructuredThreePartSlide;
export const ChallengeSlide = StructuredThreePartSlide;
export const LessonsLearnedSlide = StructuredThreePartSlide;

export function StatementSlide({
  title,
  statement,
}: {
  title: ReactNode;
  statement: ReactNode;
}) {
  return (
    <Slide brandPosition="bottom-right">
      <div
        style={{
          height: "100%",
          display: "grid",
          alignContent: "center",
          gap: space.xl,
        }}
      >
        <Chip tone="accent">{title}</Chip>
        <div
          style={{
            fontSize: type.title,
            lineHeight: 1.08,
            fontWeight: weights.bold,
            maxWidth: 1040,
          }}
        >
          {statement}
        </div>
      </div>
    </Slide>
  );
}

export const ValuePropositionSlide = StatementSlide;
export const ResearchQuestionSlide = StatementSlide;
export const KeyInsightSlide = StatementSlide;
export const KeyTakeawaySlide = StatementSlide;
export const ConclusionSlide = StatementSlide;

export function CustomerPersonaSlide({
  title,
  persona,
}: {
  title: ReactNode;
  persona: PersonItem & { needs?: ReactNode[]; pains?: ReactNode[] };
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr 1fr",
          gap: space.xl,
        }}
      >
        <PlaceholderVisual label={persona.name} aspectRatio="1 / 1" />
        <ItemCard
          item={{
            title: persona.name,
            description: persona.bio ?? persona.role,
          }}
        />
        <Stack>
          {persona.needs ? (
            <ItemCard
              item={{
                title: "Needs",
                description: <BulletList items={persona.needs} />,
              }}
            />
          ) : null}
          {persona.pains ? (
            <ItemCard
              item={{
                title: "Pains",
                description: <BulletList items={persona.pains} />,
              }}
            />
          ) : null}
        </Stack>
      </div>
    </BasicSlide>
  );
}

export function MarketOpportunitySlide({
  title,
  tam,
  sam,
  som,
}: {
  title: ReactNode;
  tam: ReactNode;
  sam: ReactNode;
  som: ReactNode;
}) {
  return (
    <StatisticsGridSlide
      title={title}
      metrics={[
        { value: tam, label: "TAM" },
        { value: sam, label: "SAM" },
        { value: som, label: "SOM" },
      ]}
    />
  );
}

export const CompetitiveLandscapeSlide = TableSlide;
export const BusinessModelSlide = StructuredThreePartSlide;
export const ProductRoadmapSlide = TimelineSlide;
export const CaseStudySlide = StructuredThreePartSlide;
export const TestimonialSlide = QuoteSlide;

export const MethodologySlide = StructuredThreePartSlide;
export const ResultsSlide = StatisticsGridSlide;
export const DiscussionSlide = TextSlide;
export const ReferencesSlide = TextSlide;
export const LimitationsSlide = TextSlide;
export const MythRealitySlide = ComparisonSlide;

export function SpeakerCardSlide({
  title,
  speaker,
}: {
  title: ReactNode;
  speaker: PersonItem;
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: space["2xl"],
          alignItems: "center",
        }}
      >
        <PlaceholderVisual label={speaker.name} aspectRatio="1 / 1" />
        <SlideTitle
          title={speaker.name}
          subtitle={speaker.bio ?? speaker.role}
          size="section"
        />
      </div>
    </BasicSlide>
  );
}

export function SponsorGridSlide({
  title,
  sponsors,
}: {
  title: ReactNode;
  sponsors: ReactNode[];
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: space.lg,
        }}
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              placeItems: "center",
              minHeight: 110,
              border: `1px solid ${colors.inverseBorder}`,
              borderRadius: radii.md,
              background: colors.inverseBackground,
              color: colors.inverseForeground,
              fontWeight: weights.bold,
            }}
          >
            {sponsor}
          </div>
        ))}
      </div>
    </BasicSlide>
  );
}

export function EventScheduleSlide({
  title,
  rows,
}: {
  title: ReactNode;
  rows: NamedText[];
}) {
  return <FAQSlide title={title} items={rows} />;
}

export const CommunityShowcaseSlide = FeatureListSlide;
export const TeamSlide = OrganizationChartSlide;
export const PartnerShowcaseSlide = SponsorGridSlide;
export const QRCodeSlide = RepositorySlide;

export function ScreenshotSlide({
  title,
  variant = "browser",
}: {
  title: ReactNode;
  variant?: "browser" | "mobile" | "desktop" | "raw";
}) {
  return (
    <BasicSlide title={title}>
      <div
        style={{ width: variant === "mobile" ? 330 : "100%", margin: "0 auto" }}
      >
        {variant !== "raw" ? (
          <div
            style={{
              height: 34,
              border: `1px solid ${colors.border}`,
              borderBottom: 0,
              borderRadius: `${radii.md}px ${radii.md}px 0 0`,
              background: colors.surface,
            }}
          />
        ) : null}
        <PlaceholderVisual
          label={variant}
          variant="screenshot"
          style={{
            borderRadius:
              variant === "raw" ? radii.md : `0 0 ${radii.md}px ${radii.md}px`,
          }}
        />
      </div>
    </BasicSlide>
  );
}

export function VideoSlide({
  title,
  caption,
}: {
  title: ReactNode;
  caption?: ReactNode;
}) {
  return (
    <BasicSlide title={title}>
      <Stack>
        <PlaceholderVisual label="Video" variant="video" />
        {caption ? (
          <TextBlock size="caption" tone="muted">
            {caption}
          </TextBlock>
        ) : null}
      </Stack>
    </BasicSlide>
  );
}

export function DemoSlide({
  title,
  goal,
  watch,
  action,
}: {
  title: ReactNode;
  goal: ReactNode;
  watch: ReactNode;
  action: ReactNode;
}) {
  return (
    <StructuredThreePartSlide
      title={title}
      parts={[
        { title: "Goal", description: goal },
        { title: "Watch", description: watch },
        { title: "Key action", description: action },
      ]}
    />
  );
}

export const PhotoGallerySlide = ImageSlide;
export const BeforeAfterVisualSlide = ComparisonSlide;
export const RecapSlide = TextSlide;
export const CallToActionSlide = StatementSlide;
export const ContactSlide = RepositorySlide;
export const ThankYouSlide = StatementSlide;
