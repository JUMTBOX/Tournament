import type { Match } from "./Bracket";
import type { Team } from "./TeamCard";

/** 나중에 팀 업로드 할 때나 아니면 다른 시점으로 옮기기... */
const randomMatching = (teams: Team[]) => {
  const round = [];

  let match = [];
  while (!!teams.length) {
    const idx = Math.floor(Math.random() * teams.length);
    const team = teams.splice(idx, 1)[0];

    match.push(team);

    if (match.length == 2) {
      const [teamA, teamB] = match;
      round.push({ teamA, teamB });
      match = [];
    }
  }

  return round;
};

/**
 * @description `팀 수`에 따른 예선부터 결승까지의 총 라운드 수 반환 (`팀 수`가 홀수면 부전승 추가)
 * @param {Team[]} teams
 * @returns {number}
 */
export const totalRounds = (teams: Team[]) => {
  if (teams.length % 2 !== 0)
    teams.push({ id: "부전승", name: "부전승", logoUrl: "" });

  const rounds: Match[][] = [];
  let { length: teamLen } = teams;

  while (teamLen > 1) {
    const roundMatch = Array(teamLen / 2).fill({
      id: "",
      teamA: null,
      teamB: null,
    });
    rounds.push(roundMatch);
    teamLen = teamLen / 2;
  }
  return rounds.reverse();
};
