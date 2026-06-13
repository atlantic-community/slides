import { describe, expect, it } from "vitest";

import { fitScale } from "./use-scale-to-fit";

describe("fitScale", () => {
  it("fits by width when the container is wide and short", () => {
    expect(fitScale(640, 720, 1280, 720)).toBeCloseTo(0.5);
  });

  it("fits by height when the container is tall and narrow", () => {
    expect(fitScale(1280, 360, 1280, 720)).toBeCloseTo(0.5);
  });

  it("returns the exact ratio when one axis matches", () => {
    expect(fitScale(1280, 720, 1280, 720)).toBe(1);
    expect(fitScale(2560, 1440, 1280, 720)).toBe(2);
  });

  it("returns 0 for a zero-sized container", () => {
    expect(fitScale(0, 0, 1280, 720)).toBe(0);
    expect(fitScale(100, 0, 1280, 720)).toBe(0);
  });
});
