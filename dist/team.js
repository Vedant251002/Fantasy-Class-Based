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
    balls = 0;
    isPlayed = false;
    static allowedBatsman = 5;
    static allowedBowler = 5;
    static allowedWicketKeeper = 1;
    constructor(name) {
        this.name = name;
        this.validateName();
        this.players = [];
    }
    getName() {
        return this.name;
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
    setIsPlayed() {
        this.isPlayed = true;
    }
    getIsPlayed() {
        return this.isPlayed;
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
        if (player.getIsViceCaptain()) {
            throw new Error("This player is already selected for captain or vice captain");
        }
        player.setIsCaptain();
    }
    setViceCaptain(player) {
        if (player.getIsCaptain()) {
            throw new Error("This player is already selected for captain or vice captain");
        }
        player.setIsViceCaptain();
    }
    getCaptain() {
        return this.players.filter(player => player.getIsCaptain() == true)[0];
    }
    getViceCaptain() {
        return this.players.filter(player => player.getIsViceCaptain() == true)[0];
    }
    setRuns() {
        this.runs = this.players.reduce((runs, player) => {
            return runs + player.getRuns();
        }, 0);
    }
    setFantasyPoints() {
        this.fantasyPoints = this.players.reduce((points, player) => {
            return points + player.getFantasyPoints();
        }, 0);
    }
    getRuns() {
        return this.runs;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
    getBatsman() {
        return this.players.filter(player => {
            if (player.getIsBat() == false) {
                return player;
            }
        })[0];
    }
    getBowler() {
        return this.players.filter(player => {
            if (player.getRole() == "Bowler" && player.getIsBowl() == false) {
                return player;
            }
        })[0];
    }
    addWickets() {
        this.wickets += 1;
    }
    getWickets() {
        return this.wickets;
    }
    addOvers() {
        this.over += 1;
    }
    getOvers() {
        return this.over;
    }
    addBalls() {
        this.balls += 1;
    }
    getBalls() {
        return this.balls;
    }
}
exports.Team = Team;
