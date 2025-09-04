import type { Team } from "../bracket/TeamCard";

export class RegistrationRequestUtil {
  static async create(param: Team) {
    try {
      await fetch("http://localhost:8000/team/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(param),
      });
    } catch (e) {
      console.error(e);
    }
  }

  static async createMulti(param: Team[]) {
    try {
      await fetch("http://localhost:8000/team/createmulti", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(param),
      });
    } catch (e) {
      console.error(e);
    }
  }
}
