import { type CSSProperties } from "react";

import { colors, fonts } from "./tokens";

export interface StatProps {
  value: string;
  label?: string;
  description?: string;
  style?: CSSProperties;
}

/**
 * Big mono number with an optional label and muted description.
 * Used for attendance counts, editions, sponsor figures, etc.
 */
export function Stat({ value, label, description, style }: StatProps) {
  return (
    <div style={{ ...style }}>
      <div
        style={{
          fontFamily: fonts.mono,
          fontWeight: 700,
          fontSize: 120,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      {label ? (
        <div
          style={{
            fontFamily: fonts.sans,
            fontWeight: 700,
            fontSize: 28,
            marginTop: 16,
          }}
        >
          {label}
        </div>
      ) : null}
      {description ? (
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 20,
            color: colors.muted,
            marginTop: 8,
          }}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
