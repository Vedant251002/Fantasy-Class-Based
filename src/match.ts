import { Team } from "./team";

export class Match {
    private battingTeam: Team;
    private bowlingTeam: Team;

    constructor(team1: Team, team2: Team) {
        if (team1.name == team2.name) {
            throw new Error('Both team names are same')
        }
        this.battingTeam = team1;
        this.bowlingTeam = team2;
    }
    toss() {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.battingTeam
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp
        }
    }
    showBattingTeam() {
        return this.battingTeam
    }
    showBowlingTeam() {
        return this.bowlingTeam
    }
    showTossWinnerTeam() {
        return this.battingTeam
    }
    showTossLoserTeam() {
        return this.bowlingTeam
    }

}