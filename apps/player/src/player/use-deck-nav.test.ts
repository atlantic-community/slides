import { describe, expect, it } from "vitest";

import { clampIndex, readSlideFromUrl } from "./use-deck-nav";

describe("clampIndex", () => {
  it("clamps below, above, and within range", () => {
    expect(clampIndex(-3, 5)).toBe(0);
    expect(clampIndex(10, 5)).toBe(4);
    expect(clampIndex(2, 5)).toBe(2);
  });

  it("returns 0 when there are no slides", () => {
    expect(clampIndex(3, 0)).toBe(0);
  });
});

describe("readSlideFromUrl", () => {
  it("maps 1-based ?slide to a clamped 0-based index", () => {
    expect(readSlideFromUrl("?slide=3", 10)).toBe(2);
    expect(readSlideFromUrl("?slide=1", 10)).toBe(0);
    expect(readSlideFromUrl("?slide=99", 10)).toBe(9);
  });

  it("defaults to 0 for missing or invalid values", () => {
    expect(readSlideFromUrl("", 10)).toBe(0);
    expect(readSlideFromUrl("?slide=abc", 10)).toBe(0);
    expect(readSlideFromUrl("?foo=1", 10)).toBe(0);
  });
});
