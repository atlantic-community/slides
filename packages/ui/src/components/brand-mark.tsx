import { fonts, slide } from "./tokens";

export interface BrandMarkProps {
  inverse?: boolean;
  text?: string;
}

export function BrandMark({
  inverse = false,
  text = "The Atlantic\nCommunity",
}: BrandMarkProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 40,
        left: slide.padding,
        fontFamily: fonts.mono,
        fontWeight: 700,
        fontSize: 14,
        lineHeight: 1.3,
        whiteSpace: "pre-line",
        color: inverse ? "#000000" : "#ffffff",
      }}
    >
      {text}
    </div>
  );
}
