import { decks, getDeck } from "@repo/decks";
import { notFound } from "next/navigation";

import { Player } from "@/src/player/player";

export function generateStaticParams() {
  return decks.map((deck) => ({ id: deck.meta.id }));
}

export default async function DeckPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const deck = getDeck(id);
  if (!deck) notFound();
  return <Player slides={deck.slides} title={deck.meta.title} />;
}
