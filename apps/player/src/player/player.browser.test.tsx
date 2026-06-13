import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { page, userEvent } from "vitest/browser";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Player } from "./player";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

afterEach(cleanup);

// The player syncs the slide index to ?slide=N; reset it so deep-link state
// from one test doesn't carry into the next (shared browser context).
beforeEach(() => {
  window.history.replaceState(null, "", window.location.pathname);
});

const slides = [
  <div key="1" data-testid="s1" style={{ color: "#fff" }}>
    First slide
  </div>,
  <div key="2" data-testid="s2" style={{ color: "#fff" }}>
    Second slide
  </div>,
  <div key="3" data-testid="s3" style={{ color: "#fff" }}>
    Third slide
  </div>,
];

describe("Player", () => {
  it("renders the first slide and scales the surface to fit", () => {
    render(<Player slides={slides} title="Test deck" />);
    expect(screen.getByText("1 / 3")).toBeTruthy();
    expect(screen.getByText("First slide")).toBeTruthy();

    const surface = document.querySelector(
      '[data-testid="slide-surface"]',
    ) as HTMLElement;
    // useScaleToFit applied a real transform (proves scaling ran in-browser).
    expect(getComputedStyle(surface).transform).not.toBe("none");
  });

  it("goes back and forth with the on-screen controls", async () => {
    render(<Player slides={slides} title="Test deck" />);

    fireEvent.click(screen.getByLabelText("Next slide"));
    expect(screen.getByText("2 / 3")).toBeTruthy();
    expect(screen.getByText("Second slide")).toBeTruthy();
    // Saved under the gitignored __screenshots__/ default location.
    await page.screenshot();

    fireEvent.click(screen.getByLabelText("Next slide"));
    expect(screen.getByText("3 / 3")).toBeTruthy();

    fireEvent.click(screen.getByLabelText("Previous slide"));
    expect(screen.getByText("2 / 3")).toBeTruthy();
  });

  it("navigates and clamps with the keyboard", async () => {
    render(<Player slides={slides} title="Test deck" />);

    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByText("2 / 3")).toBeTruthy();

    await userEvent.keyboard("{End}");
    expect(screen.getByText("3 / 3")).toBeTruthy();

    // Clamps at the end.
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByText("3 / 3")).toBeTruthy();

    await userEvent.keyboard("{Home}");
    expect(screen.getByText("1 / 3")).toBeTruthy();
  });
});
