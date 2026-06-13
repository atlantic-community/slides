"use client";

import { type RefObject, useCallback, useLayoutEffect, useState } from "react";

/**
 * Largest uniform scale that fits `content` inside `container`, preserving
 * aspect ratio. Pure — unit tested directly.
 */
export function fitScale(
  containerW: number,
  containerH: number,
  contentW: number,
  contentH: number,
): number {
  if (containerW <= 0 || containerH <= 0 || contentW <= 0 || contentH <= 0) {
    return 0;
  }
  return Math.min(containerW / contentW, containerH / contentH);
}

/** Track the scale needed to fit a fixed `contentW`×`contentH` into `ref`. */
export function useScaleToFit(
  ref: RefObject<HTMLElement | null>,
  contentW: number,
  contentH: number,
): number {
  const [scale, setScale] = useState(0);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setScale(fitScale(el.clientWidth, el.clientHeight, contentW, contentH));
  }, [ref, contentW, contentH]);

  useLayoutEffect(() => {
    measure();
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure, ref]);

  return scale;
}
