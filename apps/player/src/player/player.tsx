"use client";

import screenfull from "screenfull";
import { useRouter } from "next/navigation";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Controls } from "@atlantic-community-slides/ui/player/controls";
import { SlideStage } from "@atlantic-community-slides/ui/player/slide-stage";
import { useDeckNav } from "./use-deck-nav";

export interface PlayerProps {
  slides: ReactNode[];
  title?: string;
}

const IDLE_MS = 2600;

/** Full-viewport presentation player: scaled slide + auto-hiding chrome. */
export function Player({ slides, title }: PlayerProps) {
  const router = useRouter();
  const { index, count, next, prev, goTo } = useDeckNav(slides.length);
  const containerRef = useRef<HTMLDivElement>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  const toggleFullscreen = useCallback(() => {
    if (!screenfull.isEnabled || !containerRef.current) return;
    void screenfull.toggle(containerRef.current);
  }, []);

  useEffect(() => {
    if (!screenfull.isEnabled) return;
    const onChange = () => setIsFullscreen(screenfull.isFullscreen);
    screenfull.on("change", onChange);
    return () => screenfull.off("change", onChange);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "f" || event.key === "F") {
        event.preventDefault();
        toggleFullscreen();
      }
      if (event.key === "Escape") {
        // Handled natively by browsers for full screen, but we might want to exit?
        // Let's just rely on the UI button or standard browser behavior.
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleFullscreen]);

  const revealControls = useCallback(() => {
    setControlsVisible(true);
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setControlsVisible(false), IDLE_MS);
  }, []);

  useEffect(() => {
    revealControls();
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [revealControls]);

  return (
    <div
      ref={containerRef}
      onMouseMove={revealControls}
      onPointerDown={revealControls}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "#000",
        overflow: "hidden",
        cursor: controlsVisible ? "default" : "none",
      }}
    >
      <SlideStage>{slides[index]}</SlideStage>
      <Controls
        index={index}
        count={count}
        title={title}
        visible={controlsVisible}
        isFullscreen={isFullscreen}
        onPrev={prev}
        onNext={next}
        onToggleFullscreen={toggleFullscreen}
        onSeek={(fraction) => goTo(Math.round(fraction * (count - 1)))}
        onExit={() => router.push("/")}
      />
    </div>
  );
}
