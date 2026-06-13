"use client";

import { slide } from "../components/tokens";
import { type ReactNode, useRef } from "react";

import { useScaleToFit } from "./use-scale-to-fit";

export interface SlideStageProps {
  children: ReactNode;
  /** Letterbox colour around the scaled slide. */
  background?: string;
}

/**
 * Renders a slide at its native 1280×720 size and scales it to fill the
 * available space, preserving aspect ratio and letterboxing the remainder.
 */
export function SlideStage({ children, background = "#000" }: SlideStageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scale = useScaleToFit(ref, slide.width, slide.height);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        data-testid="slide-surface"
        style={{
          width: slide.width,
          height: slide.height,
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: "center",
          visibility: scale > 0 ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
