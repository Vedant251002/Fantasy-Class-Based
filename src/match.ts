import { Game } from "./game";
import { Team } from "./team";

export class Match {
    private battingTeam: Team;
    private bowlingTeam: Team;
    public innings!: Game;
    private overs! : number;

    constructor(team1: Team, team2: Team) {
        if (team1.name == team2.name) {
            throw new Error('Both team names are same');
        }
        this.battingTeam = team1;
        this.bowlingTeam = team2;
    }

    toss(): void {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.battingTeam;
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp;
        }
    }
    setOvers(over: number): void {
        this.overs = over
    }
    getBattingTeam(): Team {
        return this.battingTeam;
    }

    getBowlingTeam(): Team {
        return this.bowlingTeam;
    }

    getTossWinnerTeam(): Team {
        return this.battingTeam;
    }

    getTossLoserTeam(): Team {
        return this.bowlingTeam;
    }
    autoPlay(){
        for (let i = 1; i <= this.overs * 6; i++) {
            this.innings.hit();
        }
    }
    startGame(): void {
        this.innings = new Game(this.battingTeam , this.bowlingTeam);
        this.innings.setOvers(this.overs);
        this.autoPlay()
    }
    changeInnings(){
        this.innings = new Game(this.bowlingTeam , this.battingTeam);
        this.innings.setOvers(this.overs);
        this.autoPlay()

    }
    getWinner() {
        let winner: Team = this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints() ? this.battingTeam : this.bowlingTeam;
        return console.log(winner.getName(), 'has won the match');
    }
}
