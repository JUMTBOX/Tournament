import { useParams } from "react-router";
import TeamCard, { type Team } from "./TeamCard";
import { Card } from "@/components/ui/card";

export type Match = {
  id: string;
  teamA?: Team | null;
  teamB?: Team | null;
};

export default function Bracket() {
  const params = useParams();
  console.log("파라메타 >>> ", params);

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
    <>
      {rounds?.map(([{ teamA, teamB }], i) => (
        <Card key={i} className="flex w-full justify-around">
          <TeamCard team={teamA} key={teamA?.id} />
          <TeamCard team={teamB} key={teamB?.id} />
        </Card>
      ))}
    </>
  );
}
