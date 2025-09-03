import { useMemo } from "react";
import { useParams } from "react-router";
import { type Team } from "@/TeamCard";
import { totalRounds } from "@/bracketUtil";
import MatchCard from "./MatchCard";

export type Match = {
  id?: string;
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
    { id: "t7", name: "temp7" },
    { id: "t8", name: "temp8" },
  ];

  const rounds = useMemo(() => totalRounds(teams), [teams.length]);

  return (
    <div
      className={`grid grid-rows-${rounds.length} w-full h-full`}
      id="bracket_wrapper"
    >
      {rounds.map((round, i) => (
        <div
          key={i}
          className="flex flex-row justify-center items-center w-full h-full"
        >
          {round.map(({ teamA, teamB }, idx) => (
            <MatchCard teamA={teamA} teamB={teamB} />
          ))}
        </div>
      ))}
    </div>
  );
}
