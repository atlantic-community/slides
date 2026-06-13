"use client";

import { fonts } from "../components/tokens";
import { Search } from "lucide-react";

export interface DeckSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function DeckSearch({ value, onChange }: DeckSearchProps) {
  return (
    <div
      style={{ position: "relative", flex: 1, minWidth: 280, maxWidth: 400 }}
    >
      <Search
        size={18}
        style={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "rgba(255,255,255,0.4)",
        }}
      />
      <input
        type="text"
        placeholder="Search decks by title, tags, or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px 12px 44px",
          borderRadius: 8,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#fff",
          fontSize: 15,
          outline: "none",
          fontFamily: fonts.sans,
        }}
      />
    </div>
  );
}
