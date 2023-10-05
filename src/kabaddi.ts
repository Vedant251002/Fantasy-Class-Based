import { Cricket } from "./cricket";
import { Imatch } from "./interface";
import { KabaddiTeam } from "./kabaddiTeam";


export class Kabaddi implements Imatch{
    raiderTeam : KabaddiTeam
    defenderTeam : KabaddiTeam
    constructor(raiderTeam: KabaddiTeam, defenderTeam : KabaddiTeam) {
        if (raiderTeam.name == defenderTeam.name) {
            throw new Error('Both team names are same');
        }
        this.raiderTeam = raiderTeam;
        this.defenderTeam = defenderTeam;

    }
    toss(): void {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.raiderTeam;
            this.raiderTeam = this.defenderTeam;
            this.defenderTeam = temp;
        }
    }
    getTossWinnerTeam(): KabaddiTeam {
        return this.raiderTeam;
    }

    getTossLoserTeam(): KabaddiTeam {
        return this.defenderTeam;
    }
    getWinner() {
        // let winner: CricketTeam = this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints() ? this.battingTeam : this.bowlingTeam;
        return console.log(this.raiderTeam, 'has won the match');
    }
}