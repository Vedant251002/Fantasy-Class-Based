"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    battingTeam;
    bowlingTeam;
    constructor(team1, team2) {
        if (team1.name == team2.name) {
            throw new Error('Both team names are same');
        }
        this.battingTeam = team1;
        this.bowlingTeam = team2;
    }
    toss() {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.battingTeam;
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp;
        }
    }
    showBattingTeam() {
        return this.battingTeam;
    }
    showBowlingTeam() {
        return this.bowlingTeam;
    }
    showTossWinnerTeam() {
        return this.battingTeam;
    }
    showTossLoserTeam() {
        return this.bowlingTeam;
    }
}
exports.Match = Match;
