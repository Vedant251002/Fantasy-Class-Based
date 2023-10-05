"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kabaddi = void 0;
class Kabaddi {
    raiderTeam;
    defenderTeam;
    constructor(raiderTeam, defenderTeam) {
        if (raiderTeam.name == defenderTeam.name) {
            throw new Error('Both team names are same');
        }
        this.raiderTeam = raiderTeam;
        this.defenderTeam = defenderTeam;
    }
    toss() {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.raiderTeam;
            this.raiderTeam = this.defenderTeam;
            this.defenderTeam = temp;
        }
    }
    getTossWinnerTeam() {
        return this.raiderTeam;
    }
    getTossLoserTeam() {
        return this.defenderTeam;
    }
    getWinner() {
        // let winner: CricketTeam = this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints() ? this.battingTeam : this.bowlingTeam;
        return console.log(this.raiderTeam, 'has won the match');
    }
}
exports.Kabaddi = Kabaddi;
