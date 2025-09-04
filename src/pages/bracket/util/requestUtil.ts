import type { Team } from "./TeamCard";

export class BracketRequestUtil {
  static async getTeam(parameter: Team[keyof Team]) {
    try {
      const response = await fetch(
        `http://localhost:8000/team?teamName=${parameter}`,
        {
          method: "get",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  static async getAllTeam() {
    try {
      const response = await fetch(`http://localhost:8000/team`, {
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });

      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  static async getTeamsByTournament(parameter: any) {
    try {
      const response = await fetch(``, {
        method: "get",
        headers: {
          "Content-type": "application/json",
        },
      });

      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }
}
