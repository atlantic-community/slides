"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export function clampIndex(index: number, count: number): number {
  if (count <= 0) return 0;
  return Math.max(0, Math.min(index, count - 1));
}

/** 1-based `?slide=N` query → 0-based index, clamped. */
export function readSlideFromUrl(search: string, count: number): number {
  const raw = new URLSearchParams(search).get("slide");
  const n = raw ? Number.parseInt(raw, 10) : Number.NaN;
  return Number.isFinite(n) ? clampIndex(n - 1, count) : 0;
}

export interface DeckNav {
  index: number;
  count: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  atStart: boolean;
  atEnd: boolean;
}

/**
 * Slide index with keyboard navigation and `?slide=N` deep-linking, driven by
 * the URL via `history.replaceState` (no router dependency, so it works in any
 * React host and in vitest browser mode).
 */
export function useDeckNav(count: number): DeckNav {
  const [index, setIndex] = useState(0);
  const ready = useRef(false);

  // Read the initial slide from the URL after mount (avoids SSR window access).
  useLayoutEffect(() => {
    setIndex(readSlideFromUrl(window.location.search, count));
    ready.current = true;
  }, [count]);

  // Keep the URL in sync once initialised.
  useEffect(() => {
    if (!ready.current || typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("slide") === String(index + 1)) return;
    params.set("slide", String(index + 1));
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  }, [index]);

  const move = useCallback(
    (delta: number) => setIndex((prev) => clampIndex(prev + delta, count)),
    [count],
  );
  const goTo = useCallback(
    (target: number) => setIndex(() => clampIndex(target, count)),
    [count],
  );
  const next = useCallback(() => move(1), [move]);
  const prev = useCallback(() => move(-1), [move]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          event.preventDefault();
          move(1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          move(-1);
          break;
        case "Home":
          event.preventDefault();
          goTo(0);
          break;
        case "End":
          event.preventDefault();
          goTo(count - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move, goTo, count]);

  return {
    index,
    count,
    next,
    prev,
    goTo,
    atStart: index <= 0,
    atEnd: index >= count - 1,
  };
}
