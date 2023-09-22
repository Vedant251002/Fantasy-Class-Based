"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricketer = void 0;
const player_1 = require("./player");
class Cricketer extends player_1.Player {
    runs = 0;
    balls = 0;
    isCaptain = false;
    isViceCaptain = false;
    isBat = false;
    over = 0;
    wicket = 0;
    constructor(id, name, role, credit) {
        super(id, name, role, credit);
    }
    addWickets() {
        this.wicket += 1;
    }
    getWicket() {
        return this.wicket;
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
    addBalls() {
        this.balls += 1;
    }
    getBalls() {
        return this.balls;
    }
    setIsBat() {
        this.isBat = true;
    }
    addOver() {
        this.over += 1;
    }
    getIsBat() {
        return this.isBat;
    }
    getOver() {
        return this.over;
    }
}
exports.Cricketer = Cricketer;
