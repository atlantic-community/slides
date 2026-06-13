import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { decks } from "../registry";

afterEach(cleanup);

describe("deck slides render without throwing", () => {
  for (const deck of decks) {
    deck.slides.forEach((slide, index) => {
      it(`${deck.meta.id} — slide ${index + 1}`, () => {
        const { container } = render(<div>{slide}</div>);
        expect(container.firstChild).toBeTruthy();
      });
    });
  }
});
