"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const game_1 = require("./game");
class Match {
    battingTeam;
    bowlingTeam;
    innings;
    overs;
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
    setOvers(over) {
        this.overs = over;
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
    autoPlay() {
        for (let i = 1; i <= this.overs * 6; i++) {
            this.innings.hit();
        }
    }
    startGame() {
        this.innings = new game_1.Game(this.battingTeam, this.bowlingTeam);
        this.innings.setOvers(this.overs);
        this.autoPlay();
    }
    changeInnings() {
        this.innings = new game_1.Game(this.bowlingTeam, this.battingTeam);
        this.innings.setOvers(this.overs);
        this.autoPlay();
    }
    getWinner() {
        let winner = this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints() ? this.battingTeam : this.bowlingTeam;
        return console.log(winner.getName(), 'has won the match');
    }
}
exports.Match = Match;
