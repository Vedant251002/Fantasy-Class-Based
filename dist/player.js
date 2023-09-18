"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const shots = [
    { name: "Single", point: 1, runs: 1 },
    { name: "Double", point: 2, runs: 2 },
    { name: "Triple", point: 3, runs: 3 },
    { name: "Boundary", point: 5, runs: 4 },
    { name: "Six", point: 8, runs: 6 },
    { name: "DotBall", point: 1, runs: 0 },
    { name: "Wicket", point: 10, runs: 0 },
];
class Player {
    id;
    name;
    role;
    credit;
    runs = 0;
    balls = 0;
    isCaptain = false;
    isViceCaptain = false;
    fantasyPoints = 0;
    constructor(id, name, role, credit) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.credit = credit;
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
    isSame() {
        if (this.isCaptain === this.isViceCaptain) {
            return true;
        }
        throw new Error("This player is selected before in captain or vice captain");
    }
    static shots() {
        let random = Math.floor(Math.random() * 7);
        return shots[random];
    }
    addRuns(runs) {
        this.runs += runs;
    }
    getRuns() {
        return this.runs;
    }
    addFantasyPoints(points) {
        // this.fantasyPoints += this.isCaptain ? points * 2 : this.isViceCaptain ? points * 1.5 : points
        this.fantasyPoints += points;
    }
    addBalls() {
        this.balls += 1;
    }
    getBalls() {
        return this.balls;
    }
}
exports.Player = Player;
