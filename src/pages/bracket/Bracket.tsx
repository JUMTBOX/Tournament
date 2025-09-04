import { useMemo } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { type Team } from "@/pages/bracket/TeamCard";
import { totalRounds } from "@/pages/bracket/util/bracketUtil";
import MatchCard from "@/pages/bracket/MatchCard";
import { BracketRequestUtil } from "@/pages/bracket/util/requestUtil";

export type Match = {
  id?: string;
  teamA?: Team | null;
  teamB?: Team | null;
};

export default function Bracket() {
  const params = useParams();
  const { getAllTeam } = BracketRequestUtil;
  console.log("파라메타 >>> ", params);

  const { data: teams } = useQuery({
    queryKey: ["all_team"],
    queryFn: getAllTeam,
  });

  console.log(teams);

  const rounds = useMemo(() => totalRounds(teams ?? []), [teams?.length]);

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
          {round.map(({ teamA, teamB }) => (
            <MatchCard teamA={teamA} teamB={teamB} />
          ))}
        </div>
      ))}
    </div>
  );
}
