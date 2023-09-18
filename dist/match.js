"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const player_1 = require("./player");
class Match {
    battingTeam;
    bowlingTeam;
    currentBatsman;
    currentBowler;
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
    getBattingTeam() {
        return this.battingTeam;
    }
    getBowlingTeam() {
        return this.bowlingTeam;
    }
    getTossWinnerTeam() {
        return this.battingTeam;
    }
    getTossLoserTeam() {
        return this.bowlingTeam;
    }
    startGame() {
        this.battingTeam.sortPlayers();
        this.bowlingTeam.sortPlayers();
        this.currentBatsman = this.battingTeam.getPlayers()[0];
        this.currentBowler = this.bowlingTeam.getPlayers()[5];
        this.hit();
        this.hit();
    }
    hit() {
        let shot = player_1.Player.shots();
        if (shot == 5) {
            this.changeBatsman();
        }
        else {
            this.validateRunsAndFP(shot);
            this.battingTeam.setRuns(shot);
        }
    }
    validateRunsAndFP(runs) {
        switch (runs) {
            case 1:
            case 2:
            case 3:
                this.currentBatsman.addRuns(runs);
                this.currentBatsman.addFantasyPoints(runs);
                break;
            case 4:
                this.currentBatsman.addRuns(runs);
                this.currentBatsman.addFantasyPoints(5);
                break;
            case 6:
                this.currentBatsman.addRuns(runs);
                this.currentBatsman.addFantasyPoints(8);
                break;
        }
    }
    changeBatsman() {
        let index = this.battingTeam.getPlayers().findIndex(player => player == this.currentBatsman);
        this.currentBatsman = this.battingTeam.getPlayers()[++index];
    }
}
exports.Match = Match;
