import { isValidElement } from "react";
import { describe, expect, it } from "vitest";

import { decks, getDeck } from "./registry";

describe("deck registry", () => {
  it("has at least one deck", () => {
    expect(decks.length).toBeGreaterThan(0);
  });

  it("gives every deck a unique id", () => {
    const ids = decks.map((deck) => deck.meta.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every deck a title and non-empty slides", () => {
    for (const deck of decks) {
      expect(deck.meta.title).toBeTruthy();
      expect(deck.slides.length).toBeGreaterThan(0);
      for (const slide of deck.slides) {
        expect(isValidElement(slide)).toBe(true);
      }
    }
  });

  it("resolves a known deck and rejects an unknown one", () => {
    expect(getDeck("atlantic-community")?.meta.title).toBe(
      "The Atlantic Community",
    );
    expect(getDeck("does-not-exist")).toBeUndefined();
  });
});
