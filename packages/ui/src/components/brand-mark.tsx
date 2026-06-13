import { type CSSProperties } from "react";
import { fonts, slide } from "./tokens";

export type BrandMarkPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

export interface BrandMarkProps {
  inverse?: boolean;
  text?: string;
  position?: BrandMarkPosition;
}

const positionStyles: Record<BrandMarkPosition, CSSProperties> = {
  "top-left": { top: 40, left: slide.padding, textAlign: "left" },
  "top-right": { top: 40, right: slide.padding, textAlign: "right" },
  "bottom-left": { bottom: 40, left: slide.padding, textAlign: "left" },
  "bottom-right": { bottom: 40, right: slide.padding, textAlign: "right" },
  center: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: 24,
  },
};

export function BrandMark({
  inverse = false,
  text = "The Atlantic\nCommunity",
  position = "top-left",
}: BrandMarkProps) {
  return (
    <div
      style={{
        position: "absolute",
        fontFamily: fonts.mono,
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 1.3,
        whiteSpace: "pre-line",
        color: inverse ? "#000000" : "#ffffff",
        ...positionStyles[position],
      }}
    >
      {text}
    </div>
  );
}
