import TeamCard, { type Team } from "./TeamCard";

export type Match = {
  id: string;
  teamA?: Team | null;
  teamB?: Team | null;
};

export default function Bracket({ rounds }: { rounds: Match[][] }) {
  return (
    <>
      {rounds.map(([{ teamA, teamB }]) => (
        <>
          <TeamCard team={teamA} />
          <TeamCard team={teamB} />
        </>
      ))}
    </>
  );
}
