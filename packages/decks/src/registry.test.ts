import { isValidElement } from "react";
import { describe, expect, it } from "vitest";

import { decks, getDeck } from "./registry";

describe("deck registry", () => {
  it("allows an empty deck registry initially", () => {
    expect(decks.length).toBe(0);
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

  it("rejects an unknown deck ID", () => {
    expect(getDeck("nope")).toBeUndefined();
  });
});
