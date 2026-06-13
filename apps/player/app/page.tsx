"use client";

import { decks } from "@atlantic-community-slides/decks";
import { fonts } from "@atlantic-community-slides/ui/components/tokens";
import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

import { DeckCard } from "@atlantic-community-slides/ui/player/deck-card";
import { DeckEmpty } from "@atlantic-community-slides/ui/player/deck-empty";
import { DeckSearch } from "@atlantic-community-slides/ui/player/deck-search";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredAndSortedDecks = useMemo(() => {
    // First, sort all decks by date (newest first)
    const sorted = [...decks].sort((a, b) => {
      const dateA = new Date(a.meta.date).getTime();
      const dateB = new Date(b.meta.date).getTime();
      return dateB - dateA;
    });

    // If no search query, return the sorted list
    if (!search.trim()) {
      return sorted;
    }

    // Otherwise, perform fuzzy search
    const fuse = new Fuse(sorted, {
      keys: ["meta.title", "meta.description", "meta.tags"],
      threshold: 0.3,
      // By default Fuse.js sorts by relevance (score). We'll let it sort by relevance when searching.
    });

    const results = fuse.search(search);
    return results.map((result) => result.item);
  }, [search]);

  return (
    <main
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "80px 32px",
        fontFamily: fonts.sans,
        color: "#fff",
      }}
    >
      <header
        style={{
          marginBottom: 64,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            width: "100%",
            maxWidth: 640,
          }}
        >
          <div
            style={{
              flex: 1,
              fontFamily: fonts.mono,
              fontWeight: 700,
              fontSize: 18,
              lineHeight: 1.3,
              whiteSpace: "pre-line",
              textAlign: "right",
            }}
          >
            {"The Atlantic\nCommunity"}
          </div>
          <div
            style={{
              width: 1,
              height: 40,
              background: "rgba(255,255,255,0.2)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              flex: 1,
              color: "rgba(255,255,255,0.6)",
              fontSize: 16,
              lineHeight: 1.5,
            }}
          >
            Slides
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: 16,
          }}
        >
          <DeckSearch
            value={search}
            onChange={setSearch}
            placeholder="Search decks by title, tags, or description..."
            style={{
              flex: 1,
              width: "100%",
              maxWidth: 520,
              background: "rgba(255,255,255,0.05)",
            }}
          />
        </div>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 36,
        }}
      >
        {filteredAndSortedDecks.length === 0 ? (
          <DeckEmpty />
        ) : (
          filteredAndSortedDecks.map((deck) => (
            <DeckCard
              key={deck.meta.id}
              id={deck.meta.id}
              title={deck.meta.title}
              date={deck.meta.date}
              description={deck.meta.description}
              tags={deck.meta.tags}
              cover={deck.slides[0]}
              Component={Link}
            />
          ))
        )}
      </div>
    </main>
  );
}
