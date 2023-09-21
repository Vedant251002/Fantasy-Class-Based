"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batsman = void 0;
const player_1 = require("./player");
class Batsman extends player_1.Player {
    runs = 0;
    balls = 0;
    isBat = false;
    constructor(id, name, role, credit) {
        super(id, name, role, credit);
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
    getIsBat() {
        return this.isBat;
    }
}
exports.Batsman = Batsman;
