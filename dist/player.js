"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    id;
    name;
    role;
    credit;
    fantasyPoints = 0;
    runs = 0;
    balls = 0;
    isCaptain = false;
    isViceCaptain = false;
    isBat = false;
    isBowl = false;
    wicket = 0;
    constructor(id, name, role, credit) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.credit = credit;
    }
    addWickets() {
        this.wicket += 1;
    }
    getWicket() {
        return this.wicket;
    }
    getName() {
        return this.name;
    }
    getPlayer() {
        return this;
    }
    getId() {
        return this.id;
    }
    getCredit() {
        return this.credit;
    }
    getRole() {
        return this.role;
    }
    setIsCaptain() {
        this.isCaptain = true;
    }
    setIsViceCaptain() {
        this.isViceCaptain = true;
    }
    getIsCaptain() {
        return this.isCaptain;
    }
    getIsViceCaptain() {
        return this.isViceCaptain;
    }
    addRuns(runs) {
        this.runs += runs;
    }
    getRuns() {
        return this.runs;
    }
    addFantasyPoints(points) {
        this.fantasyPoints += points;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
    addBalls() {
        this.balls += 1;
    }
    getBalls() {
        return this.balls;
    }
    setIsBat() {
        this.isBat = true;
    }
    setIsBowl() {
        this.isBowl = true;
    }
    getIsBat() {
        return this.isBat;
    }
    getIsBowl() {
        return this.isBowl;
    }
}
exports.Player = Player;
