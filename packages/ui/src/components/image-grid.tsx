import { type CSSProperties } from "react";

export interface ImageGridProps {
  images: { src: string; alt: string }[];
  columns?: number;
  gap?: number;
  rowHeight?: number;
  style?: CSSProperties;
}

/**
 * Grid of cover-fit photos with the standard 8px rounded corners.
 */
export function ImageGrid({
  images,
  columns = 2,
  gap = 16,
  rowHeight = 240,
  style,
}: ImageGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridAutoRows: rowHeight,
        gap,
        ...style,
      }}
    >
      {images.map((image, index) => (
        <img
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      ))}
    </div>
  );
}
