"use client";

import { fonts } from "../components/tokens";
import { Search } from "lucide-react";

export interface DeckSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

export function DeckSearch({
  value,
  onChange,
  placeholder = "Search...",
  style,
}: DeckSearchProps) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 8,
        ...style,
      }}
    >
      <Search
        size={18}
        style={{
          marginLeft: 16,
          color: "inherit",
          opacity: 0.4,
          flexShrink: 0,
        }}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          flex: 1,
          width: "100%",
          padding: "12px 16px 12px 12px",
          background: "transparent",
          border: "none",
          color: "inherit",
          fontSize: 15,
          outline: "none",
          fontFamily: fonts.sans,
        }}
      />
    </div>
  );
}
