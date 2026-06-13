"use client";

import { fonts } from "@repo/ui/components/tokens";
import Link from "next/link";
import { type ReactNode, useState } from "react";

import { SlideStage } from "../player/slide-stage";

export interface DeckCardProps {
  id: string;
  title: string;
  date: string;
  /** First slide, rendered as a live thumbnail. */
  cover: ReactNode;
}

export function DeckCard({ id, title, date, cover }: DeckCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`/decks/${id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div
        style={{
          aspectRatio: "16 / 9",
          borderRadius: 12,
          overflow: "hidden",
          background: "#000",
          border: "1px solid rgba(255,255,255,0.12)",
          outline: hover ? "1px solid rgba(255,255,255,0.4)" : "none",
          transition: "outline-color 150ms ease",
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
    </Link>
  );
}
