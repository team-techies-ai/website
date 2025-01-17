// src/services/team.service.ts
import Team from "../Models/team.model";
import { ITeam } from "../Interfaces/team.interface";

class TeamService {
  static async createTeamMember(teamData: ITeam) {
    const newTeamMember = new Team(teamData);
    await newTeamMember.save();
    return newTeamMember;
  }
}

export default TeamService;
