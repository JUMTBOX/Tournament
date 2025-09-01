import React from "react";
import TeamCard, { type Team } from "./TeamCard";

export type Match = {
  id: string;
  teamA?: Team | null;
  teamB?: Team | null;
};

export default function Bracket({ rounds }: { rounds: Match[][] }) {
  return (
    <>
      {rounds.map(([{ teamA, teamB }], i) => (
        <React.Fragment key={i}>
          <TeamCard team={teamA} key={teamA?.id} />
          <TeamCard team={teamB} key={teamB?.id} />
        </React.Fragment>
      ))}
    </>
  );
}
