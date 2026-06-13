"use client";

import { fonts } from "../components/tokens";
import { type ElementType, type ReactNode, useState } from "react";

import { SlideStage } from "./slide-stage";

export interface DeckCardProps {
  id: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  /** First slide, rendered as a live thumbnail. */
  cover: ReactNode;
  /** Component to use for the root link, defaults to "a" */
  Component?: ElementType;
}

export function DeckCard({
  id,
  title,
  date,
  description,
  tags,
  cover,
  Component = "a",
}: DeckCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <Component
      href={`/decks/${id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        flexDirection: "column",
        padding: 16,
        borderRadius: 16,
        background: hover ? "rgba(255,255,255,0.06)" : "transparent",
        transition: "background 150ms ease",
      }}
    >
      <div
        style={{
          aspectRatio: "16 / 9",
          borderRadius: 8,
          overflow: "hidden",
          background: "#000",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <SlideStage>{cover}</SlideStage>
      </div>
      <div
        style={{
          marginTop: 14,
          fontFamily: fonts.sans,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 600 }}>{title}</div>
        <div
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            whiteSpace: "nowrap",
          }}
        >
          {date}
        </div>
      </div>
      {description ? (
        <div
          style={{
            marginTop: 8,
            fontSize: 14,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      ) : null}
      {tags && tags.length > 0 ? (
        <div
          style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 12 }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                padding: "2px 8px",
                borderRadius: 4,
                background: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: fonts.mono,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </Component>
  );
}
