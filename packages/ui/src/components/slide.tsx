import { type CSSProperties, type ReactNode } from "react";

import { BrandMark, type BrandMarkPosition } from "./brand-mark";
import { colors, fonts, slide, space, type, weights } from "./tokens";

export interface SlideProps {
  children: ReactNode;
  inverse?: boolean;
  padded?: boolean;
  brand?: ReactNode;
  brandPosition?: BrandMarkPosition;
  style?: CSSProperties;
}

export function Slide({
  children,
  inverse = false,
  padded = true,
  brand,
  brandPosition = "top-left",
  style,
}: SlideProps) {
  return (
    <section
      style={{
        position: "relative",
        width: slide.width,
        height: slide.height,
        overflow: "hidden",
        boxSizing: "border-box",
        padding: padded ? slide.padding : 0,
        background: inverse ? colors.inverseBackground : colors.background,
        color: inverse ? colors.inverseForeground : colors.foreground,
        fontFamily: fonts.sans,
        ...style,
      }}
    >
      {brand === undefined ? (
        <BrandMark inverse={inverse} position={brandPosition} />
      ) : (
        brand
      )}
      {children}
    </section>
  );
}

export interface SlideTitleProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center" | "right";
  size?: "display" | "title" | "section";
  inverse?: boolean;
  style?: CSSProperties;
}

export function SlideTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "title",
  inverse = false,
  style,
}: SlideTitleProps) {
  return (
    <header style={{ textAlign: align, ...style }}>
      {eyebrow ? (
        <div
          style={{
            marginBottom: space.md,
            fontFamily: fonts.mono,
            fontSize: type.brand,
            fontWeight: weights.bold,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: inverse ? colors.inverseMuted : colors.subtle,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      <h1
        style={{
          margin: 0,
          maxWidth: align === "center" ? "100%" : 980,
          fontFamily: size === "display" ? fonts.mono : fonts.sans,
          fontSize: type[size],
          lineHeight: 0.98,
          fontWeight: weights.bold,
          letterSpacing: 0,
        }}
      >
        {title}
      </h1>
      {subtitle ? (
        <p
          style={{
            margin: `${space.lg}px 0 0`,
            maxWidth: align === "center" ? 840 : 760,
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
            fontSize: type.subtitle,
            lineHeight: 1.18,
            color: inverse ? colors.inverseMuted : colors.muted,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

export interface TextBlockProps {
  children: ReactNode;
  tone?: "default" | "muted";
  size?: "lead" | "body" | "caption" | "footnote";
  inverse?: boolean;
  style?: CSSProperties;
}

export function TextBlock({
  children,
  tone = "default",
  size = "body",
  inverse = false,
  style,
}: TextBlockProps) {
  const muted = inverse ? colors.inverseMuted : colors.muted;
  return (
    <div
      style={{
        fontSize: type[size],
        lineHeight: size === "footnote" ? 1.35 : 1.45,
        color: tone === "muted" ? muted : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export interface MetricProps {
  value: ReactNode;
  label: ReactNode;
  detail?: ReactNode;
  inverse?: boolean;
}

export function Metric({ value, label, detail, inverse = false }: MetricProps) {
  return (
    <div
      style={{
        minHeight: 132,
        padding: space.lg,
        border: `1px solid ${inverse ? colors.inverseBorder : colors.border}`,
        borderRadius: 8,
        background: inverse ? colors.inverseSurface : colors.surface,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 54,
          fontWeight: weights.bold,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div style={{ marginTop: space.md, fontSize: type.body }}>{label}</div>
      {detail ? (
        <div
          style={{
            marginTop: space.xs,
            fontSize: type.caption,
            color: inverse ? colors.inverseMuted : colors.muted,
          }}
        >
          {detail}
        </div>
      ) : null}
    </div>
  );
}

export interface PlaceholderVisualProps {
  label?: ReactNode;
  variant?: "photo" | "chart" | "screenshot" | "video" | "qr";
  seed?: number;
  aspectRatio?: string;
  style?: CSSProperties;
}

const visualBackgrounds = [
  `linear-gradient(135deg, ${colors.neutral100}, ${colors.neutral300})`,
  `linear-gradient(135deg, ${colors.neutral50}, ${colors.primary})`,
  `linear-gradient(135deg, ${colors.neutral200}, ${colors.accent})`,
  `linear-gradient(135deg, ${colors.neutral100}, ${colors.success})`,
] as const;

export function PlaceholderVisual({
  label,
  variant = "photo",
  seed = 0,
  aspectRatio = "16 / 9",
  style,
}: PlaceholderVisualProps) {
  const background =
    visualBackgrounds[seed % visualBackgrounds.length] ?? visualBackgrounds[0];
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        minHeight: 180,
        borderRadius: 8,
        overflow: "hidden",
        background,
        border: `1px solid ${colors.border}`,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.26,
          backgroundImage:
            variant === "qr"
              ? `linear-gradient(90deg, ${colors.foreground} 10px, transparent 10px), linear-gradient(${colors.foreground} 10px, transparent 10px)`
              : `radial-gradient(circle at 20% 25%, ${colors.foreground} 0 3px, transparent 4px), linear-gradient(120deg, transparent 0 45%, ${colors.foreground} 45% 46%, transparent 47%)`,
          backgroundSize: variant === "qr" ? "34px 34px" : "80px 80px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: space.lg,
          bottom: space.lg,
          fontFamily: fonts.mono,
          fontSize: type.caption,
          fontWeight: weights.bold,
          textTransform: "uppercase",
        }}
      >
        {label ?? variant}
      </div>
    </div>
  );
}

export interface ChipProps {
  children: ReactNode;
  tone?: "neutral" | "success" | "warning" | "error" | "accent";
}

export function Chip({ children, tone = "neutral" }: ChipProps) {
  const toneColor =
    tone === "success"
      ? colors.success
      : tone === "warning"
        ? colors.warning
        : tone === "error"
          ? colors.error
          : tone === "accent"
            ? colors.accent
            : colors.muted;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: 30,
        padding: `0 ${space.md}px`,
        borderRadius: 999,
        border: `1px solid ${toneColor}`,
        color: toneColor,
        fontFamily: fonts.mono,
        fontSize: type.caption,
        fontWeight: weights.bold,
      }}
    >
      {children}
    </span>
  );
}
