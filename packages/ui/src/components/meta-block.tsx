import { type CSSProperties } from "react";

import { fonts } from "./tokens";

export interface MetaBlockProps {
  /** Bold heading line, e.g. a speaker or event name. */
  label?: string;
  /** Regular detail lines (date, venue, role...). */
  lines?: string[];
  /** Bold contact email, spaced below the lines. */
  email?: string;
  style?: CSSProperties;
}

/**
 * Cover-slide metadata block (bottom-left): label, detail lines and email.
 */
export function MetaBlock({ label, lines, email, style }: MetaBlockProps) {
  return (
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: 22,
        lineHeight: 1.4,
        ...style,
      }}
    >
      {label ? <div style={{ fontWeight: 700 }}>{label}</div> : null}
      {lines?.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      {email ? (
        <div style={{ fontWeight: 700, marginTop: 12 }}>{email}</div>
      ) : null}
    </div>
  );
}
