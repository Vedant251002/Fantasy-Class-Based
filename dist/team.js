"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    name;
    players;
    captain = null;
    viceCaptain = null;
    // private batsmanCount : number = 0
    static batsmans = 5;
    static bowlers = 5;
    static wicketKeepers = 1;
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
    getTeam() {
        return this;
    }
    getTeamPlayers() {
        return this.players;
    }
    addPlayer(players) {
        let res = this.validatePlayers(players);
        if (res) {
            return console.log("Please add players that have sum of 100 credit");
        }
        let response = this.validatePlayerRole(players);
        if (response) {
            this.players = players;
        }
    }
    validatePlayers(players) {
        if (players.length != 11) {
            return true;
        }
        let totalCredit = 0;
        players.map(player => {
            totalCredit += player.getCredit();
        });
        if (totalCredit > 100) {
            return true;
        }
        return false;
    }
    removePlayer(id) {
        this.players = this.players.filter(player => {
            if (player.getId() != id) {
                return player;
            }
        });
    }
    validatePlayerRole(players) {
        let batsmanCount = players.filter(player => player.getRole() == "Batsman").length;
        let bowlerCount = players.filter(player => player.getRole() == "Bowler").length;
        let wicketKeeperCount = players.filter(player => player.getRole() == "Wicketkeeper").length;
        if (batsmanCount != Team.batsmans) {
            console.log("Batsman Exceeded");
            return false;
        }
        if (bowlerCount != Team.bowlers) {
            console.log("Bowler Exceeded");
            return false;
        }
        if (wicketKeeperCount != Team.wicketKeepers) {
            console.log("WicketKeeper Exceeded");
            return false;
        }
        return true;
    }
    checkSameCapViceCap(captain, viceCaptain) {
        if (captain === viceCaptain) {
            throw new Error("captain and vice captain are same");
        }
    }
    setCaptain(id) {
        let captain = this.players.find(player => (id == player.getId()));
        if (captain) {
            this.checkSameCapViceCap(captain, this.viceCaptain);
            this.captain = captain;
        }
        console.log(this.captain);
    }
    setViceCaptain(id) {
        let viceCaptain = this.players.find(player => (id == player.getId()));
        if (viceCaptain) {
            this.checkSameCapViceCap(this.captain, viceCaptain);
            this.viceCaptain = viceCaptain;
        }
    }
}
exports.Team = Team;
