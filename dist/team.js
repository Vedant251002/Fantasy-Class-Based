"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    name;
    players;
    runs = 0;
    wickets = 0;
    over = 0;
    fantasyPoints = 0;
    static allowedBatsman = 5;
    static allowedBowler = 5;
    static allowedWicketKeeper = 1;
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
    getPlayers() {
        return this.players;
    }
    addPlayer(players) {
        this.validatePlayers(players);
        this.validatePlayerRole(players);
        this.players = players;
    }
    validatePlayers(players) {
        if (players.length != 11) {
            throw new Error("Please add 11 players");
        }
        let totalCredit = 0;
        players.map(player => {
            totalCredit += player.getCredit();
        });
        if (totalCredit > 100) {
            throw new Error("Please add players that have total credits below 100");
        }
    }
    removePlayer(id) {
        let playerIndex = this.players.findIndex(player => player.getId() == id);
        if (playerIndex == -1) {
            throw new Error('Player is not in team');
        }
        this.players.splice(playerIndex, 1);
    }
    validatePlayerRole(players) {
        let batsmanCount = players.filter(player => player.getRole() == "Batsman").length;
        let bowlerCount = players.filter(player => player.getRole() == "Bowler").length;
        let wicketKeeperCount = players.filter(player => player.getRole() == "Wicketkeeper").length;
        console.log(batsmanCount, bowlerCount, wicketKeeperCount);
        if (batsmanCount != Team.allowedBatsman) {
            throw new Error("Batsman Exceeded");
        }
        if (bowlerCount != Team.allowedBowler) {
            throw new Error("Bowler Exceeded");
        }
        if (wicketKeeperCount != Team.allowedWicketKeeper) {
            throw new Error("WicketKeeper Exceeded");
        }
    }
    setCaptain(player) {
        player.isSame();
        player.setIsCaptain();
    }
    setViceCaptain(player) {
        player.isSame();
        player.setIsViceCaptain();
    }
    getCaptain() {
        return this.players.filter(player => player.getIsCaptain() == true)[0];
    }
    getViceCaptain() {
        return this.players.filter(player => player.getIsViceCaptain() == true)[0];
    }
    sortPlayers() {
        let batsmans = [];
        let bowlers = [];
        let wicketkeepers = [];
        this.players.map(player => {
            if (player.getRole() == "Batsman") {
                batsmans.push(player);
            }
            else if (player.getRole() == "Bowler") {
                bowlers.push(player);
            }
            else {
                wicketkeepers.push(player);
            }
        });
        this.players = [...batsmans, ...bowlers, ...wicketkeepers];
    }
    addRuns(runs, player) {
        player.addRuns(runs);
        this.runs += runs;
    }
    getRuns() {
        return this.runs;
    }
    addFantasyPoints(points, player) {
        player.addFantasyPoints(points);
        this.fantasyPoints += points;
    }
    getFantasy() {
        return this.fantasyPoints;
    }
    addWickets() {
        this.wickets += 1;
    }
    addOvers() {
        this.over += 1;
    }
    getOvers() {
        return this.over;
    }
}
exports.Team = Team;
