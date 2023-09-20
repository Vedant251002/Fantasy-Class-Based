import { Game } from "./game";
import { Player } from "./player";
import { Team } from "./team";

export class Match {
    private battingTeam: Team;
    private bowlingTeam: Team;
    private currentBatsman!: Player;
    private currentBowler!: Player;

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

    getCurrentBatsman(): Player {
        return this.currentBatsman;
    }

    getCurrentBowler(): Player {
        return this.currentBowler;
    }

    startGame(game: Game): void {
        for (let i = 1; i <= 30; i++) {
            game.hit();
        }
    }
    getWinner() {
        let winner: Team = this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints() ? this.battingTeam : this.bowlingTeam;
        return console.log(winner.getName(), 'has won the match');
    }
}
