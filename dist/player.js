"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    id;
    name;
    role;
    credit;
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
}
exports.Player = Player;
