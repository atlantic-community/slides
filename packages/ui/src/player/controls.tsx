"use client";

import { fonts } from "../components/tokens";
import { ChevronLeft, ChevronRight, Maximize, Minimize, X } from "lucide-react";
import {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  useState,
} from "react";

export interface ControlsProps {
  index: number;
  count: number;
  title?: string;
  visible: boolean;
  isFullscreen: boolean;
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  /** Jump to a fraction (0–1) of the deck via the progress bar. */
  onSeek: (fraction: number) => void;
  /** Exit the player and return to index */
  onExit: () => void;
}

function IconButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 38,
        height: 38,
        padding: 0,
        border: "none",
        borderRadius: 9,
        background:
          hover && !disabled ? "rgba(255,255,255,0.12)" : "transparent",
        color: "#fff",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.28 : 1,
        transition: "background 150ms ease, opacity 150ms ease",
      }}
    >
      {children}
    </button>
  );
}

const bar: CSSProperties = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: "20px 24px 24px",
  background:
    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.28) 55%, rgba(0,0,0,0))",
  fontFamily: fonts.sans,
  color: "#fff",
};

/**
 * Minimalist presentation chrome: an auto-hiding bottom bar (title · nav ·
 * fullscreen) over a persistent, clickable progress bar.
 */
export function Controls({
  index,
  count,
  title,
  visible,
  isFullscreen,
  atStart,
  atEnd,
  onPrev,
  onNext,
  onToggleFullscreen,
  onSeek,
  onExit,
}: ControlsProps) {
  const [trackHover, setTrackHover] = useState(false);
  const progress = count > 0 ? ((index + 1) / count) * 100 : 0;

  const handleSeek = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.width <= 0) return;
    onSeek(Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)));
  };

  return (
    <>
      <div
        style={{
          ...bar,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 220ms ease, transform 220ms ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <div
          style={{ flex: 1, display: "flex", alignItems: "center", gap: 12 }}
        >
          <IconButton label="Exit presentation" onClick={onExit}>
            <X size={20} strokeWidth={2} />
          </IconButton>
          <div
            style={{
              fontSize: 13,
              letterSpacing: 0.2,
              color: "rgba(255,255,255,0.55)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <IconButton
            label="Previous slide"
            onClick={onPrev}
            disabled={atStart}
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </IconButton>
          <div
            style={{
              fontVariantNumeric: "tabular-nums",
              fontSize: 13,
              minWidth: 60,
              padding: "0 6px",
              textAlign: "center",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {index + 1} / {count}
          </div>
          <IconButton label="Next slide" onClick={onNext} disabled={atEnd}>
            <ChevronRight size={20} strokeWidth={2} />
          </IconButton>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            onClick={onToggleFullscreen}
          >
            {isFullscreen ? (
              <Minimize size={20} strokeWidth={2} />
            ) : (
              <Maximize size={20} strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      <div
        role="slider"
        aria-label="Slide progress"
        aria-valuemin={1}
        aria-valuemax={count}
        aria-valuenow={index + 1}
        tabIndex={-1}
        onClick={handleSeek}
        onMouseEnter={() => setTrackHover(true)}
        onMouseLeave={() => setTrackHover(false)}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: trackHover ? 8 : 5,
          background: "rgba(255,255,255,0.32)",
          cursor: "pointer",
          transition: "height 150ms ease",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "#fff",
            transition: "width 220ms ease",
          }}
        />
      </div>
    </>
  );
}
