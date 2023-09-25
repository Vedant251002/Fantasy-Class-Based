"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    homeTeam;
    opponentTeam;
    // public innings!: Game;
    // private overs! : number;
    constructor(team1, team2) {
        if (team1.name == team2.name) {
            throw new Error('Both team names are same');
        }
        this.homeTeam = team1;
        this.opponentTeam = team2;
    }
    toss() {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.homeTeam;
            this.homeTeam = this.opponentTeam;
            this.opponentTeam = temp;
        }
    }
    // setOvers(over: number): void {
    //     this.overs = over
    // }
    getHomeTeam() {
        return this.homeTeam;
    }
    getOpponentTeam() {
        return this.opponentTeam;
    }
    getTossWinnerTeam() {
        return this.homeTeam;
    }
    getTossLoserTeam() {
        return this.opponentTeam;
    }
    // autoPlay(){
    //     for (let i = 1; i <= this.overs * 6; i++) {
    //         this.innings.hit();
    //     }
    // }
    // startGame(): void {
    //     this.innings = new Game(this.homeTeam , this.opponentTeam);
    //     this.innings.setOvers(this.overs);
    //     this.autoPlay()
    // }
    // changeInnings(){
    //     this.innings = new Game(this.opponentTeam , this.homeTeam);
    //     this.innings.setOvers(this.overs);
    //     this.autoPlay()
    // }
    getWinner() {
        let winner = this.homeTeam.getFantasyPoints() > this.opponentTeam.getFantasyPoints() ? this.homeTeam : this.opponentTeam;
        return console.log(winner.getName(), 'has won the match');
    }
}
exports.Match = Match;
