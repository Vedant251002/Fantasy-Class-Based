"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KabaddiTeam = void 0;
class KabaddiTeam {
    name;
    players = [];
    constructor(name) {
        this.name = name;
    }
    addPlayer(players) {
        this.players = players;
    }
    getPlayers() {
        return this.players;
    }
}
exports.KabaddiTeam = KabaddiTeam;
