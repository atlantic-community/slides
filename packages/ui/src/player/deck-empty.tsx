import { SearchX } from "lucide-react";
import { fonts } from "../components/tokens";

export function DeckEmpty() {
  return (
    <div
      style={{
        gridColumn: "1 / -1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        textAlign: "center",
        color: "rgba(255,255,255,0.4)",
        fontFamily: fonts.sans,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          background: "rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <SearchX size={28} color="#ffffff" style={{ opacity: 0.4 }} />
      </div>
      <div
        style={{
          fontSize: 18,
          color: "#fff",
          marginBottom: 8,
          fontWeight: 500,
        }}
      >
        No slides found
      </div>
      <div style={{ fontSize: 15, maxWidth: 300, lineHeight: 1.5 }}>
        We couldn&apos;t find any presentations matching your search criteria.
        Try adjusting your keywords.
      </div>
    </div>
  );
}
