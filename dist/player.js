"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    id;
    name;
    role;
    credit;
    runs = 0;
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
        return Math.floor(Math.random() * 7);
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
}
exports.Player = Player;
