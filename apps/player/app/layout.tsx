import type { Metadata } from "next";

// Shared brand fonts (same entry Storybook uses) so slides render identically.
import "@atlantic-community-slides/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlantic Community — Decks",
  description: "Slide decks for The Atlantic Community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
