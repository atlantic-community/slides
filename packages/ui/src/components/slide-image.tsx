import { type CSSProperties } from "react";

export interface SlideImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  /** Apply the standard 8px rounded corners. */
  rounded?: boolean;
  style?: CSSProperties;
}

/**
 * Photo block with the standard 8px rounded corners and cover fit.
 */
export function SlideImage({
  src,
  alt,
  width,
  height,
  rounded = true,
  style,
}: SlideImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        display: "block",
        width,
        height,
        objectFit: "cover",
        borderRadius: rounded ? 8 : 0,
        ...style,
      }}
    />
  );
}
