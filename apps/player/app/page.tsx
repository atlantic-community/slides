import { decks } from "@atlantic-community-slides/decks";
import { fonts } from "@atlantic-community-slides/ui/components/tokens";

import { DeckCard } from "@/src/components/deck-card";

export default function Home() {
  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 32px" }}>
      <header style={{ marginBottom: 44 }}>
        <h1
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            margin: 0,
          }}
        >
          Decks
        </h1>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 36,
        }}
      >
        {decks.map((deck) => (
          <DeckCard
            key={deck.meta.id}
            id={deck.meta.id}
            title={deck.meta.title}
            date={deck.meta.date}
            cover={deck.slides[0]}
          />
        ))}
      </div>
    </main>
  );
}
