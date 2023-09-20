"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    battingTeam;
    bowlingTeam;
    currentBatsman;
    currentBowler;
    playGame;
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
    getCurrentBatsman() {
        return this.currentBatsman;
    }
    getCurrentBowler() {
        return this.currentBowler;
    }
    startGame(game) {
        for (let i = 1; i <= 30; i++) {
            game.hit();
        }
    }
    // autoPlay(){
    //     for(let i = 1 ; i <= 30 ; i++){
    //         this.playGame.hit()
    //     }
    // }
    // changeInnings(): void {
    //     this.playGame = new Game(this.bowlingTeam,this.battingTeam)
    // }
    getWinner() {
        let winner = this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints() ? this.battingTeam : this.bowlingTeam;
        return console.log(winner.getName(), 'has won the match');
    }
}
exports.Match = Match;
