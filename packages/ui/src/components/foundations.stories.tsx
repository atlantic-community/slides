import type { Meta, StoryObj } from "@storybook/react-vite";

import { colors, fonts, radii, space, type, weights } from "./tokens";

/**
 * Living documentation for the design tokens. Not a slide — a reference sheet
 * for anyone building or reviewing slides.
 */
const meta: Meta = {
  title: "Foundations/Design Tokens",
  tags: ["ai-generated"],
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: colors.background,
          color: colors.foreground,
          fontFamily: fonts.sans,
          padding: 56,
          boxSizing: "border-box",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: fonts.mono,
        fontSize: 14,
        fontWeight: weights.bold,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: colors.subtle,
        margin: "0 0 24px",
      }}
    >
      {children}
    </h2>
  );
}

export const Colors: Story = {
  render: () => {
    const swatches = Object.entries(colors);
    return (
      <div>
        <SectionTitle>Colors</SectionTitle>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {swatches.map(([name, value]) => (
            <div key={name}>
              <div
                style={{
                  height: 80,
                  borderRadius: radii.md,
                  backgroundColor: value,
                  border: `1px solid ${colors.border}`,
                }}
              />
              <div
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  fontWeight: weights.semibold,
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: colors.muted,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const Typography: Story = {
  render: () => {
    const scale = Object.entries(type).sort((a, b) => b[1] - a[1]);
    return (
      <div>
        <SectionTitle>Type scale</SectionTitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {scale.map(([name, size]) => {
            const mono = name === "display" || name === "brand";
            return (
              <div
                key={name}
                style={{ display: "flex", alignItems: "baseline", gap: 24 }}
              >
                <div
                  style={{
                    width: 140,
                    flexShrink: 0,
                    fontFamily: fonts.mono,
                    fontSize: 12,
                    color: colors.muted,
                  }}
                >
                  {name} · {size}px
                </div>
                <div
                  style={{
                    fontFamily: mono ? fonts.mono : fonts.sans,
                    fontSize: Math.min(size, 56),
                    fontWeight: weights.bold,
                    lineHeight: 1.1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  The Atlantic Community
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 40, display: "flex", gap: 56 }}>
          <div>
            <div style={{ fontFamily: fonts.mono, fontSize: 28 }}>
              IBM Plex Mono
            </div>
            <div style={{ fontSize: 12, color: colors.muted, marginTop: 6 }}>
              brand mark · cover titles
            </div>
          </div>
          <div>
            <div style={{ fontFamily: fonts.sans, fontSize: 28 }}>
              IBM Plex Sans
            </div>
            <div style={{ fontSize: 12, color: colors.muted, marginTop: 6 }}>
              titles · body · everything else
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Spacing: Story = {
  render: () => (
    <div>
      <SectionTitle>Spacing &amp; radii</SectionTitle>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {Object.entries(space).map(([name, value]) => (
          <div
            key={name}
            style={{ display: "flex", alignItems: "center", gap: 24 }}
          >
            <div
              style={{
                width: 100,
                fontFamily: fonts.mono,
                fontSize: 12,
                color: colors.muted,
              }}
            >
              {name} · {value}
            </div>
            <div
              style={{
                width: value,
                height: 24,
                backgroundColor: colors.foreground,
                borderRadius: 2,
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, display: "flex", gap: 24 }}>
        {Object.entries(radii)
          .filter(([name]) => name !== "pill")
          .map(([name, value]) => (
            <div key={name} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 88,
                  height: 88,
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                  borderRadius: value,
                }}
              />
              <div
                style={{
                  marginTop: 10,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  color: colors.muted,
                }}
              >
                {name} · {value}
              </div>
            </div>
          ))}
      </div>
    </div>
  ),
};
