"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    name;
    players;
    constructor(name) {
        this.name = name;
        this.validateName();
        this.players = [];
    }
    validateName() {
        if (this.name == "" || this.name == " ") {
            throw new Error("should not be blank");
        }
    }
    showTeam() {
        return this;
    }
    showTeamPlayers() {
        return this.players;
    }
    addPlayer(players) {
        let res = this.validateTeamPlayers(players);
        if (res) {
            return;
        }
        this.players = players;
    }
    validateTeamPlayers(players) {
        if (players.length != 11) {
            return true;
        }
        let totalCredit = 0;
        players.map(player => {
            totalCredit += player.getCredit();
        });
        // console.log(totalCredit);
        if (totalCredit > 100) {
            return true;
        }
    }
    removePlayer(id) {
        this.players = this.players.filter(player => {
            if (player.getId() != id) {
                return player;
            }
        });
    }
}
exports.Team = Team;
