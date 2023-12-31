"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketer_1 = require("./cricketer");
class CricketerMapper {
    static toDomain(player) {
        return new cricketer_1.Cricketer(player.id, player.name, player.playingRole, player.credit);
    }
}
exports.default = CricketerMapper;
