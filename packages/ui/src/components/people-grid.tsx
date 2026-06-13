import { type CSSProperties } from "react";

import { colors, fonts, type, weights } from "./tokens";

export interface Person {
  name: string;
  src: string;
}

export interface PeopleGridProps {
  people: Person[];
  columns?: number;
  avatarSize?: number;
  gap?: number;
  /**
   * Explicit people-per-row, e.g. [2, 3, 2] for a centred, staggered cluster.
   * When omitted, people flow in a `columns`-wide grid with rows centred.
   */
  rows?: number[];
  style?: CSSProperties;
}

function PersonItem({
  person,
  avatarSize,
  width,
}: {
  person: Person;
  avatarSize: number;
  width: string | number;
}) {
  return (
    <div
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        src={person.src}
        alt={person.name}
        width={avatarSize}
        height={avatarSize}
        style={{
          display: "block",
          width: avatarSize,
          height: avatarSize,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: weights.semibold,
          fontSize: type.brand,
          color: colors.foreground,
          marginTop: 10,
        }}
      >
        {person.name}
      </div>
    </div>
  );
}

/**
 * Circular avatars with names underneath, for organiser and speaker line-ups.
 * Either a centred `columns`-grid (rows wrap and centre) or an explicit
 * `rows` cluster like [2, 3, 2].
 */
export function PeopleGrid({
  people,
  columns = 3,
  avatarSize = 84,
  gap = 32,
  rows,
  style,
}: PeopleGridProps) {
  if (rows && rows.length > 0) {
    const groups: Person[][] = [];
    let cursor = 0;
    for (const count of rows) {
      groups.push(people.slice(cursor, cursor + count));
      cursor += count;
    }
    if (cursor < people.length) groups.push(people.slice(cursor));
    const itemWidth = avatarSize + 64;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: gap,
          ...style,
        }}
      >
        {groups.map((group, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: gap,
            }}
          >
            {group.map((person) => (
              <PersonItem
                key={person.name}
                person={person}
                avatarSize={avatarSize}
                width={itemWidth}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  const itemWidth = `calc((100% - ${(columns - 1) * gap}px) / ${columns})`;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: gap,
        rowGap: gap,
        ...style,
      }}
    >
      {people.map((person) => (
        <PersonItem
          key={person.name}
          person={person}
          avatarSize={avatarSize}
          width={itemWidth}
        />
      ))}
    </div>
  );
}
