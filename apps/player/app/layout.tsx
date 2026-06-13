import type { Metadata } from "next";

// Shared brand fonts (same entry Storybook uses) so slides render identically.
import "@repo/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlantic Makers — Decks",
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
