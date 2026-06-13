import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "vitest/browser";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useEffect, useState } from "react";

import { decks, getDeck } from "@atlantic-community-slides/decks";
import Home from "../../app/page";
import { Player } from "./player";

const routerMock = vi.hoisted(() => ({
  push: vi.fn((href: string) => {
    globalThis.__playerTestNavigate?.(href);
  }),
}));

const fullscreenMock = vi.hoisted(() => ({
  isFullscreen: false,
  listeners: new Set<() => void>(),
  toggle: vi.fn(async () => {
    fullscreenMock.isFullscreen = !fullscreenMock.isFullscreen;
    fullscreenMock.listeners.forEach((listener) => listener());
  }),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => routerMock,
}));

vi.mock("next/link", async () => {
  const React = await import("react");
  return {
    __esModule: true,
    default: ({
      href,
      children,
      onClick,
      ...props
    }: {
      href: string;
      children: React.ReactNode;
      onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    }) =>
      React.createElement(
        "a",
        {
          href,
          ...props,
          onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
            onClick?.(event);
            if (event.defaultPrevented) return;
            event.preventDefault();
            globalThis.__playerTestNavigate?.(href);
          },
        },
        children,
      ),
  };
});

vi.mock("screenfull", () => ({
  default: {
    get isEnabled() {
      return true;
    },
    get isFullscreen() {
      return fullscreenMock.isFullscreen;
    },
    toggle: fullscreenMock.toggle,
    on: vi.fn((event: string, listener: () => void) => {
      if (event === "change") fullscreenMock.listeners.add(listener);
    }),
    off: vi.fn((event: string, listener: () => void) => {
      if (event === "change") fullscreenMock.listeners.delete(listener);
    }),
  },
}));

declare global {
  // Browser-test route shim used by the mocked Next link/router modules.
  var __playerTestNavigate: ((href: string) => void) | undefined;
}

function TestApp() {
  const [path, setPath] = useState("/");

  useEffect(() => {
    globalThis.__playerTestNavigate = (href: string) => {
      setPath(href);
      window.history.pushState(null, "", href);
    };
    return () => {
      globalThis.__playerTestNavigate = undefined;
    };
  }, []);

  const deckId = path.match(/^\/decks\/([^?]+)/)?.[1];
  if (deckId) {
    const deck = getDeck(deckId);
    if (!deck) throw new Error(`Unknown test deck: ${deckId}`);
    return <Player slides={deck.slides} title={deck.meta.title} />;
  }

  return <Home />;
}

describe("Player integration", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
    fullscreenMock.isFullscreen = false;
    fullscreenMock.listeners.clear();
    fullscreenMock.toggle.mockClear();
    routerMock.push.mockClear();
  });

  afterEach(cleanup);

  it("searches, opens, closes, navigates boundaries, and toggles fullscreen", async () => {
    const user = userEvent.setup();
    const deck = decks[0];
    if (!deck) throw new Error("Expected at least one registered deck");

    render(<TestApp />);

    const search = screen.getByPlaceholderText(
      "Search decks by title, tags, or description...",
    );
    await user.type(search, "not-a-real-deck");
    expect(screen.getByText("No slides found")).toBeTruthy();

    await user.clear(search);
    await user.type(search, "mock");

    const deckLink = await screen.findByRole("link", {
      name: new RegExp(deck.meta.title),
    });
    await user.click(deckLink);

    expect(await screen.findByText(`1 / ${deck.slides.length}`)).toBeTruthy();
    expect(screen.getByLabelText("Previous slide")).toBeDisabled();
    expect(screen.getByLabelText("Next slide")).toBeEnabled();

    await user.click(screen.getByLabelText("Exit presentation"));
    await waitFor(() => expect(routerMock.push).toHaveBeenCalledWith("/"));
    expect(
      await screen.findByRole("link", { name: new RegExp(deck.meta.title) }),
    ).toBeTruthy();

    await user.click(
      screen.getByRole("link", { name: new RegExp(deck.meta.title) }),
    );
    expect(await screen.findByText(`1 / ${deck.slides.length}`)).toBeTruthy();

    await user.click(screen.getByLabelText("Next slide"));
    expect(await screen.findByText(`2 / ${deck.slides.length}`)).toBeTruthy();
    expect(screen.getByLabelText("Previous slide")).toBeEnabled();

    await user.keyboard("{Home}");
    expect(await screen.findByText(`1 / ${deck.slides.length}`)).toBeTruthy();
    expect(screen.getByLabelText("Previous slide")).toBeDisabled();

    await user.keyboard("{End}");
    expect(
      await screen.findByText(`${deck.slides.length} / ${deck.slides.length}`),
    ).toBeTruthy();
    expect(screen.getByLabelText("Next slide")).toBeDisabled();

    await user.keyboard("{ArrowRight}");
    expect(
      screen.getByText(`${deck.slides.length} / ${deck.slides.length}`),
    ).toBeTruthy();

    await user.click(screen.getByLabelText("Enter fullscreen"));
    await waitFor(() => expect(fullscreenMock.toggle).toHaveBeenCalledTimes(1));
    expect(await screen.findByLabelText("Exit fullscreen")).toBeTruthy();

    await user.click(screen.getByLabelText("Exit fullscreen"));
    await waitFor(() => expect(fullscreenMock.toggle).toHaveBeenCalledTimes(2));
    expect(await screen.findByLabelText("Enter fullscreen")).toBeTruthy();
  });
});
