import { Card } from "@/components/ui/card";
import TeamCard from "@/TeamCard";
import type { Match } from "@/Bracket";

export default function MatchCard({ teamA, teamB }: Match) {
  return (
    <Card
      className={
        "flex w-full max-w-150 h-fit justify-around items-center space-x-3 p-3 mx-5 bracket-up [--up:48px] [--stroke:2px][--line:theme(colors.zinc.300)] dark:[--line:theme(colors.zinc.700)]"
      }
    >
      <TeamCard team={teamA} key={teamA?.id} />
      <p> VS </p>
      <TeamCard team={teamB} key={teamB?.id} />
    </Card>
  );
}
