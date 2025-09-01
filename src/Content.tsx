import { Suspense } from "react";
import Bracket, { type Match } from "./Bracket";
import type { Team } from "./TeamCard";

export default function Content() {
  const teams: Team[] = [
    { id: "t1", name: "Alpha" },
    { id: "t2", name: "Bravo" },
    { id: "t3", name: "Charlie" },
    { id: "t4", name: "Delta" },
    { id: "t5", name: "Echo" },
    { id: "t6", name: "Foxtrot" },
  ];

  const firstRound: Match[] = [];
  for (let i = 0; i < teams.length; i += 2) {
    firstRound.push({
      id: `R1M${i / 2}`,
      teamA: teams[i] ?? null,
      teamB: teams[i + 1] ?? null,
    });
  }

  const rounds: Match[][] = [firstRound];

  let size = firstRound.length;

  while (size > 1) {
    const next: Match[] = Array.from(
      { length: Math.ceil(size / 2) },
      (_, i) => ({ id: `R${rounds.length + 1}M${i}`, teamA: null, teamB: null })
    );
    rounds.push(next);
    size = next.length;
  }

  return (
    <Suspense fallback={<h2> Loading... </h2>}>
      <Bracket rounds={rounds} />
    </Suspense>
  );
}
