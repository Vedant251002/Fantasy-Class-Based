"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shot = void 0;
class Shot {
    name;
    point;
    runs;
    constructor(name, point, runs) {
        this.name = name;
        this.point = point;
        this.runs = runs;
    }
    getName() {
        return this.name;
    }
    getPoint() {
        return this.point;
    }
    getRuns() {
        return this.runs;
    }
}
exports.Shot = Shot;
