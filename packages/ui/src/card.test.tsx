import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Card } from "./card";

describe("Card", () => {
  it("renders the title and content", () => {
    render(
      <Card title="Docs" href="https://example.com">
        Read the docs
      </Card>,
    );

    expect(screen.getByRole("heading", { name: /docs/i })).toBeDefined();
    expect(screen.getByText("Read the docs")).toBeDefined();
  });

  it("appends utm parameters to the href", () => {
    render(
      <Card title="Docs" href="https://example.com">
        Read the docs
      </Card>,
    );

    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toContain(
      "https://example.com?utm_source=create-turbo",
    );
  });

  it("opens in a new tab safely", () => {
    render(
      <Card title="Docs" href="https://example.com">
        Read the docs
      </Card>,
    );

    const link = screen.getByRole("link");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
