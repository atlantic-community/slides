import { type ReactNode } from "react";
import { Slide } from "../components/slide";
import { type BrandMarkPosition } from "../components/brand-mark";

export interface GridSlideProps {
  children: ReactNode;
  /** Number of columns in the grid. */
  columns?: 2 | 3 | 4 | 6;
  /** Gap between columns/rows in pixels. */
  gap?: number;
  /** Optional brand mark position. */
  brand?: boolean | BrandMarkPosition;
  /** Vertical alignment of items. */
  alignItems?: "start" | "center" | "end" | "stretch";
}

/**
 * A flexible, highly reusable grid layout system.
 * Supports 2, 3, 4, or 6 columns with configurable gaps and vertical alignment.
 */
export function GridSlide({
  children,
  columns = 2,
  gap = 40,
  brand = true,
  alignItems = "center",
}: GridSlideProps) {
  return (
    <Slide brand={brand}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: gap,
          flex: 1,
          alignItems,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </Slide>
  );
}
