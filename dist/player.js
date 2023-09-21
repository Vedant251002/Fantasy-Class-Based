"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const shot_1 = require("./shot");
const shotsMapper_1 = require("./shotsMapper");
class Player {
    id;
    name;
    // private role: string;
    credit;
    // private runs: number = 0;
    // private balls: number = 0;
    isCaptain = false;
    isViceCaptain = false;
    fantasyPoints = 0;
    // private isBat: boolean = false;
    isBowl = false;
    wicket = 0;
    constructor(id, name, role, credit) {
        this.id = id;
        this.name = name;
        // this.role = role;
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
    // getRole(): string {
    //     return this.role;
    // }
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
    static shots() {
        let random = Math.floor(Math.random() * 7);
        return shotsMapper_1.ShotMapper.toDomain(shot_1.shots[random]);
    }
    // addRuns(runs: number): void {
    //     this.runs += runs;
    // }
    // getRuns(): number {
    //     return this.runs;
    // }
    addFantasyPoints(points) {
        this.fantasyPoints += points;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
    // addBalls(): void {
    //     this.balls += 1;
    // }
    // getBalls(): number {
    //     return this.balls;
    // }
    // setIsBat(): void {
    //     this.isBat = true;
    // }
    setIsBowl() {
        this.isBowl = true;
    }
    // getIsBat(): boolean {
    //     return this.isBat;
    // }
    getIsBowl() {
        return this.isBowl;
    }
}
exports.Player = Player;
