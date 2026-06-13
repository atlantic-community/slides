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
  compact = false,
}: {
  children: ReactNode;
  emphasis?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      style={{
        padding: compact ? space.md : space.lg,
        border: `1px solid ${emphasis ? colors.accent : colors.border}`,
        borderRadius: radii.md,
        background: emphasis
          ? "rgba(109, 179, 255, 0.08)"
          : "rgba(255, 255, 255, 0.045)",
        minHeight: compact ? 86 : 104,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

function ItemCard({ item, index }: { item: NamedText; index?: number }) {
  return (
    <Card compact={!item.description}>
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
      {item.description ? (
        <div
          style={{
            width: 44,
            height: 2,
            marginTop: space.lg,
            background: index !== undefined ? colors.accent : colors.border,
          }}
        />
      ) : null}
    </Card>
  );
}

function BulletList({
  items,
  ordered = false,
  size = "lead",
}: {
  items: ReactNode[];
  ordered?: boolean;
  size?: "lead" | "body" | "caption";
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <List
      style={{
        margin: 0,
        paddingLeft: ordered ? 34 : 28,
        fontSize: type[size],
        lineHeight: size === "caption" ? 1.35 : 1.38,
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
          paddingTop: space.sm,
          paddingBottom: space.lg,
          boxSizing: "border-box",
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
          gridTemplateColumns: "220px 1fr",
          gap: space["2xl"],
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: 360,
            borderLeft: `2px solid ${colors.accent}`,
            display: "grid",
            alignContent: "space-between",
            paddingLeft: space.lg,
            color: colors.accent,
            fontFamily: fonts.mono,
            fontSize: type.caption,
            fontWeight: weights.bold,
          }}
        >
          <span>{eyebrow}</span>
          <span>section</span>
        </div>
        <SlideTitle title={title} subtitle={subtitle} size="display" />
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
          label={null}
          variant="photo"
          seed={3}
          style={{ height: "100%", borderRadius: 0, border: 0 }}
        />
        {caption ? (
          <div
            style={{
              position: "absolute",
              left: slide.padding,
              bottom: slide.padding + space.lg,
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
            alignItems: "stretch",
            maxHeight: 430,
          }}
        >
          {images.map((image, index) => (
            <PlaceholderVisual key={index} label={null} seed={index} />
          ))}
        </div>
      ) : (
        <Stack>
          <PlaceholderVisual
            label={null}
            variant="photo"
            style={{ maxHeight: 430 }}
          />
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
          gap: space.xl,
          alignItems: "start",
          paddingTop: space.xl,
          alignSelf: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 66,
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
                width: 22,
                height: 22,
                borderRadius: radii.pill,
                background: colors.accent,
                marginBottom: space.lg,
                boxShadow: `0 0 0 8px ${colors.background}`,
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
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -space.lg,
              left: "12%",
              right: "12%",
              height: 1,
              background: colors.border,
            }}
          />
          {branches.map((branch, index) => (
            <div key={index} style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: -space.lg,
                  left: "50%",
                  width: 1,
                  height: space.lg,
                  background: colors.border,
                }}
              />
              <ItemCard item={branch} />
            </div>
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
          display: "flex",
          alignItems: "center",
          gap: space.lg,
          height: "100%",
        }}
      >
        {nodes.map((node, index) => (
          <div key={index} style={{ display: "contents" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <ItemCard item={node} />
            </div>
            {index < nodes.length - 1 ? (
              <div
                style={{
                  width: 54,
                  height: 2,
                  background: colors.accent,
                  position: "relative",
                  flex: "0 0 54px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: -2,
                    top: -7,
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: `12px solid ${colors.accent}`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: -28,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    fontFamily: fonts.mono,
                    fontSize: type.footnote,
                    color: colors.accent,
                  }}
                >
                  {index === 0 ? "request" : "response"}
                </div>
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
  const laneCount = Math.max(actors.length, 1);
  const laneWidth = 900 / laneCount;
  return (
    <BasicSlide title={title}>
      <svg
        viewBox="0 0 900 360"
        role="img"
        aria-label="Sequence diagram"
        style={{ width: "100%", height: 360, display: "block" }}
      >
        <defs>
          <marker
            id="sequence-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={colors.accent} />
          </marker>
        </defs>
        {actors.map((actor, index) => {
          const x = laneWidth * index + laneWidth / 2;
          return (
            <g key={actor}>
              <rect
                x={x - 70}
                y="8"
                width="140"
                height="42"
                rx={radii.md}
                fill={colors.surface}
                stroke={colors.border}
              />
              <text
                x={x}
                y="34"
                fill={colors.foreground}
                fontFamily={fonts.mono}
                fontSize={type.caption}
                textAnchor="middle"
              >
                {actor}
              </text>
              <line
                x1={x}
                y1="58"
                x2={x}
                y2="340"
                stroke={colors.border}
                strokeDasharray="8 8"
              />
            </g>
          );
        })}
        {messages.map((message, index) => {
          const from = index % laneCount;
          const to = (index + 1) % laneCount;
          const fromX = laneWidth * from + laneWidth / 2;
          const toX = laneWidth * to + laneWidth / 2;
          const y = 100 + index * 54;
          return (
            <g key={message}>
              <line
                x1={fromX}
                y1={y}
                x2={toX}
                y2={y}
                stroke={colors.accent}
                strokeWidth="3"
                markerEnd="url(#sequence-arrow)"
              />
              <rect
                x={(fromX + toX) / 2 - 86}
                y={y - 30}
                width="172"
                height="24"
                rx={radii.sm}
                fill={colors.background}
              />
              <text
                x={(fromX + toX) / 2}
                y={y - 12}
                fill={colors.foreground}
                fontFamily={fonts.mono}
                fontSize={type.footnote}
                textAnchor="middle"
              >
                {message}
              </text>
            </g>
          );
        })}
      </svg>
    </BasicSlide>
  );
}

function QRMark({ label }: { label?: ReactNode }) {
  const filled = new Set([
    "0-0",
    "0-1",
    "0-2",
    "0-3",
    "0-4",
    "0-8",
    "0-9",
    "0-10",
    "1-0",
    "1-4",
    "1-6",
    "1-8",
    "1-10",
    "2-0",
    "2-2",
    "2-4",
    "2-5",
    "2-7",
    "2-8",
    "2-10",
    "3-0",
    "3-4",
    "3-7",
    "3-10",
    "4-0",
    "4-1",
    "4-2",
    "4-3",
    "4-4",
    "4-6",
    "4-7",
    "4-8",
    "4-9",
    "4-10",
    "5-2",
    "5-5",
    "5-6",
    "5-9",
    "6-0",
    "6-3",
    "6-5",
    "6-8",
    "6-10",
    "7-1",
    "7-4",
    "7-6",
    "7-7",
    "8-0",
    "8-1",
    "8-2",
    "8-4",
    "8-6",
    "8-8",
    "8-9",
    "8-10",
    "9-0",
    "9-2",
    "9-5",
    "9-7",
    "9-10",
    "10-0",
    "10-2",
    "10-3",
    "10-4",
    "10-6",
    "10-8",
    "10-10",
  ]);
  return (
    <div
      style={{
        width: 280,
        height: 280,
        padding: space.md,
        borderRadius: radii.md,
        border: `1px solid ${colors.border}`,
        background: colors.neutral100,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(11, 1fr)",
          gap: 5,
          width: "100%",
          height: "100%",
        }}
      >
        {Array.from({ length: 121 }, (_, index) => {
          const row = Math.floor(index / 11);
          const column = index % 11;
          return (
            <div
              key={index}
              style={{
                background: filled.has(`${row}-${column}`)
                  ? colors.foreground
                  : "transparent",
                borderRadius: 2,
              }}
            />
          );
        })}
      </div>
      {label ? (
        <div
          style={{
            position: "relative",
            marginTop: -34,
            marginLeft: space.sm,
            fontFamily: fonts.mono,
            fontSize: type.caption,
            fontWeight: weights.bold,
            color: colors.foreground,
          }}
        >
          {label}
        </div>
      ) : null}
    </div>
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
          <Card key={index}>
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: radii.pill,
                display: "grid",
                placeItems: "center",
                background: index === 0 ? colors.accent : colors.surface,
                border: `1px solid ${colors.border}`,
                color: index === 0 ? colors.background : colors.foreground,
                fontFamily: fonts.mono,
                fontSize: type.heading,
                fontWeight: weights.bold,
                marginBottom: space.lg,
              }}
            >
              {String(person.name).slice(0, 1)}
            </div>
            <div style={{ fontSize: type.heading, fontWeight: weights.bold }}>
              {person.name}
            </div>
            <TextBlock
              tone="muted"
              size="caption"
              style={{ marginTop: space.sm }}
            >
              {person.role ?? person.bio}
            </TextBlock>
          </Card>
        ))}
      </div>
    </BasicSlide>
  );
}

function SponsorTile({
  sponsor,
  index,
}: {
  sponsor: ReactNode;
  index: number;
}) {
  const label = String(sponsor);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        gap: space.md,
        minHeight: 118,
        border: `1px solid ${colors.border}`,
        borderRadius: radii.md,
        background: colors.surface,
        padding: space.lg,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: space.md,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: radii.sm,
            display: "grid",
            placeItems: "center",
            background: index % 3 === 0 ? colors.foreground : colors.neutral200,
            color: index % 3 === 0 ? colors.background : colors.foreground,
            fontFamily: fonts.mono,
            fontWeight: weights.bold,
          }}
        >
          {label.slice(0, 1)}
        </div>
        <div
          style={{
            color: colors.foreground,
            fontFamily: fonts.mono,
            fontSize: type.body,
            fontWeight: weights.bold,
          }}
        >
          {sponsor}
        </div>
      </div>
      <div
        style={{
          color: colors.muted,
          fontFamily: fonts.mono,
          fontSize: type.footnote,
        }}
      >
        partner {String(index + 1).padStart(2, "0")}
      </div>
    </div>
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
    const legend = [
      ["Core", "42%", colors.accent],
      ["Growth", "26%", colors.success],
      ["Ops", "16%", colors.warning],
      ["Other", "16%", colors.border],
    ] as const;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "360px 1fr",
          gap: space.xl,
          alignItems: "center",
          height: 360,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 260,
            height: 260,
            borderRadius: radii.pill,
            background: `conic-gradient(${colors.accent} 0 42%, ${colors.success} 42% 68%, ${colors.warning} 68% 84%, ${colors.border} 84% 100%)`,
          }}
        >
          {variant === "donut" ? (
            <div
              style={{
                position: "absolute",
                inset: 70,
                borderRadius: radii.pill,
                background: colors.background,
              }}
            />
          ) : null}
          {variant === "donut" ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
                fontFamily: fonts.mono,
                fontSize: type.heading,
                fontWeight: weights.bold,
              }}
            >
              100%
            </div>
          ) : null}
        </div>
        <Stack gap={space.md}>
          {legend.map(([name, value, color]) => (
            <div
              key={name}
              style={{
                display: "grid",
                gridTemplateColumns: "18px 1fr auto",
                gap: space.md,
                alignItems: "center",
                paddingBottom: space.sm,
                borderBottom: `1px solid ${colors.border}`,
                fontFamily: fonts.mono,
                fontSize: type.caption,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: radii.sm,
                  background: color,
                }}
              />
              <span>{name}</span>
              <span style={{ color: colors.muted }}>{value}</span>
            </div>
          ))}
        </Stack>
      </div>
    );
  }
  if (variant === "heatmap" || variant === "treemap") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: variant === "heatmap" ? "80px 1fr" : "1fr",
          gap: space.md,
          alignItems: "start",
        }}
      >
        {variant === "heatmap" ? (
          <>
            <Stack gap={space.sm}>
              {["North", "West", "East", "South"].map((label) => (
                <div
                  key={label}
                  style={{
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    color: colors.muted,
                    fontFamily: fonts.mono,
                    fontSize: type.caption,
                  }}
                >
                  {label}
                </div>
              ))}
            </Stack>
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
                    height: 48,
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
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label) => (
                <div
                  key={label}
                  style={{
                    color: colors.muted,
                    fontFamily: fonts.mono,
                    fontSize: type.caption,
                    textAlign: "center",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1.4fr",
              gridTemplateRows: "120px 90px 110px",
              gap: space.sm,
            }}
          >
            {["Core", "Docs", "Web", "API", "CLI", "Data"].map(
              (label, index) => (
                <div
                  key={label}
                  style={{
                    gridColumn: index === 0 ? "span 2" : undefined,
                    background:
                      index % 3 === 0
                        ? colors.accent
                        : index % 3 === 1
                          ? colors.surface
                          : colors.border,
                    borderRadius: radii.sm,
                    padding: space.md,
                    color:
                      index % 3 === 2 ? colors.background : colors.foreground,
                    fontFamily: fonts.mono,
                    fontSize: type.caption,
                    fontWeight: weights.bold,
                  }}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        )}
      </div>
    );
  }
  if (variant === "sankey") {
    const leftLabels = ["Source A", "Source B", "Source C"];
    const rightLabels = ["Output A", "Output B"];
    return (
      <svg
        viewBox="0 0 900 360"
        role="img"
        aria-label="Sankey flow"
        style={{ width: "100%", height: 360, display: "block" }}
      >
        <path
          d="M154 92 C330 92 420 138 746 138"
          stroke={colors.accent}
          strokeWidth="24"
          strokeOpacity="0.75"
          fill="none"
        />
        <path
          d="M154 192 C350 192 470 254 746 254"
          stroke={colors.success}
          strokeWidth="34"
          strokeOpacity="0.65"
          fill="none"
        />
        <path
          d="M154 292 C340 292 470 160 746 160"
          stroke={colors.warning}
          strokeWidth="18"
          strokeOpacity="0.6"
          fill="none"
        />
        {[70, 170, 270].map((y, index) => (
          <g key={`left-${index}`}>
            <rect
              x="24"
              y={y}
              width="130"
              height="44"
              rx={radii.md}
              fill={colors.surface}
              stroke={colors.border}
            />
            <text
              x="89"
              y={y + 28}
              fill={colors.foreground}
              fontFamily={fonts.mono}
              fontSize={type.caption}
              textAnchor="middle"
            >
              {leftLabels[index]}
            </text>
          </g>
        ))}
        {[112, 228].map((y, index) => (
          <g key={`right-${index}`}>
            <rect
              x="746"
              y={y}
              width="130"
              height="52"
              rx={radii.md}
              fill={colors.surface}
              stroke={colors.border}
            />
            <text
              x="811"
              y={y + 32}
              fill={colors.foreground}
              fontFamily={fonts.mono}
              fontSize={type.caption}
              textAnchor="middle"
            >
              {rightLabels[index]}
            </text>
          </g>
        ))}
      </svg>
    );
  }
  if (variant === "line" || variant === "area") {
    const points = data.map((datum, index) => {
      const x = 40 + (index / Math.max(data.length - 1, 1)) * 820;
      const y = 330 - (datum.value / max) * 260;
      return `${x},${y}`;
    });
    const areaPath = `M ${points.join(" L ")} L 860,330 L 40,330 Z`;
    return (
      <svg
        viewBox="0 0 900 380"
        role="img"
        aria-label={`${variant} chart`}
        style={{ width: "100%", height: 360, display: "block" }}
      >
        <line x1="40" y1="330" x2="860" y2="330" stroke={colors.border} />
        <line x1="40" y1="40" x2="40" y2="330" stroke={colors.border} />
        {variant === "area" ? (
          <path d={areaPath} fill={colors.accent} opacity="0.22" />
        ) : null}
        <polyline
          points={points.join(" ")}
          fill="none"
          stroke={colors.accent}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {data.map((datum, index) => {
          const [x, y] = (points[index] ?? "40,330").split(",").map(Number);
          return (
            <g key={datum.label}>
              <circle cx={x} cy={y} r="8" fill={colors.foreground} />
              <text
                x={x}
                y="360"
                fill={colors.muted}
                fontFamily={fonts.mono}
                fontSize={type.footnote}
                textAnchor="middle"
              >
                {datum.label}
              </text>
            </g>
          );
        })}
      </svg>
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
              height: variant === "scatter" ? "100%" : height,
              alignSelf: "end",
              position: "relative",
              background:
                variant === "bar" || variant === "stacked"
                  ? colors.accent
                  : "transparent",
              borderRadius: radii.sm,
            }}
          >
            {variant === "scatter" ? (
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
      <Stack gap={space.md}>
        <MiniChart data={data} variant={variant} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: colors.muted,
            fontFamily: fonts.mono,
            fontSize: type.caption,
            borderTop: `1px solid ${colors.border}`,
            paddingTop: space.sm,
          }}
        >
          <span>Unit: indexed score</span>
          <span>Source: sample data</span>
        </div>
      </Stack>
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
      <CodePanel code={code} highlight={highlight} />
    </BasicSlide>
  );
}

const codeKeywordPattern =
  /\b(const|let|var|export|import|from|return|function|type|interface|extends|class|new|if|else|for|while|async|await|true|false|null|undefined)\b/g;
const codeTokenPattern =
  /(\/\/.*$|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\b\d+(?:\.\d+)?\b|\b(?:const|let|var|export|import|from|return|function|type|interface|extends|class|new|if|else|for|while|async|await|true|false|null|undefined)\b)/g;

function tokenColor(token: string): string | undefined {
  if (token.startsWith("//")) return colors.subtle;
  if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) {
    return colors.success;
  }
  if (/^\d/.test(token)) return colors.warning;
  if (codeKeywordPattern.test(token)) {
    codeKeywordPattern.lastIndex = 0;
    return colors.accent;
  }
  codeKeywordPattern.lastIndex = 0;
  return undefined;
}

function renderCodeLine(line: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  for (const match of line.matchAll(codeTokenPattern)) {
    const token = match[0];
    const index = match.index ?? 0;
    if (index > lastIndex) parts.push(line.slice(lastIndex, index));
    parts.push(
      <span key={`${index}-${token}`} style={{ color: tokenColor(token) }}>
        {token}
      </span>,
    );
    lastIndex = index + token.length;
  }
  if (lastIndex < line.length) parts.push(line.slice(lastIndex));
  return parts.length > 0 ? parts : [line];
}

function CodePanel({
  code,
  highlight = [],
  label,
}: {
  code: string;
  highlight?: number[];
  label?: ReactNode;
}) {
  return (
    <div
      style={{
        height: "100%",
        minHeight: 0,
        border: `1px solid ${colors.border}`,
        borderRadius: radii.md,
        background: colors.neutral100,
        overflow: "hidden",
      }}
    >
      {label ? (
        <div
          style={{
            padding: `${space.sm}px ${space.lg}px`,
            borderBottom: `1px solid ${colors.border}`,
            fontFamily: fonts.mono,
            fontSize: type.caption,
            color: colors.muted,
          }}
        >
          {label}
        </div>
      ) : null}
      <pre
        style={{
          margin: 0,
          padding: space.lg,
          fontFamily: fonts.mono,
          fontSize: type.code,
          lineHeight: 1.45,
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
            {renderCodeLine(line)}
          </div>
        ))}
      </pre>
    </div>
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
          {String(output)
            .split("\n")
            .map((line, index) => (
              <div
                key={index}
                style={{
                  color: line.toLowerCase().includes("done")
                    ? colors.success
                    : line.startsWith(">")
                      ? colors.accent
                      : undefined,
                }}
              >
                {line}
              </div>
            ))}
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
          minHeight: 0,
          height: "100%",
        }}
      >
        <CodePanel label="Before" code={before} />
        <CodePanel label="After" code={after} highlight={[1, 2]} />
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
      left={{
        title: "Request",
        description: <CodePanel code={request} />,
      }}
      right={{
        title: "Response",
        description: <CodePanel code={response} />,
      }}
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
          gridTemplateColumns: "300px 1fr",
          gap: space.xl,
          alignItems: "center",
        }}
      >
        <QRMark />
        <Stack gap={space.md}>
          <TextBlock size="lead">{cta}</TextBlock>
          <div
            style={{
              display: "flex",
              gap: space.sm,
              flexWrap: "wrap",
              marginTop: space.sm,
            }}
          >
            <Chip>resources</Chip>
            <Chip tone="accent">repo</Chip>
            <Chip>slides</Chip>
          </div>
        </Stack>
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
          alignItems: "start",
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
                description: (
                  <BulletList items={persona.needs} size="caption" />
                ),
              }}
            />
          ) : null}
          {persona.pains ? (
            <ItemCard
              item={{
                title: "Pains",
                description: (
                  <BulletList items={persona.pains} size="caption" />
                ),
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
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: space.md,
          alignItems: "start",
        }}
      >
        {sponsors.map((sponsor, index) => (
          <SponsorTile key={index} sponsor={sponsor} index={index} />
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
        style={{
          width: variant === "mobile" ? 300 : "100%",
          maxHeight: 430,
          margin: "0 auto",
        }}
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
          aspectRatio={variant === "mobile" ? "9 / 16" : "16 / 9"}
          style={{
            minHeight: variant === "mobile" ? 410 : 0,
            maxHeight: variant === "mobile" ? 410 : 390,
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
        <PlaceholderVisual
          label="Video"
          variant="video"
          style={{ maxHeight: 410 }}
        />
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
