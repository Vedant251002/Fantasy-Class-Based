"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const batsman_1 = require("./batsman");
class PlayerMapper {
    static toDomain(player) {
        return new batsman_1.Batsman(player.id, player.name, player.role, player.credit);
    }
}
exports.default = PlayerMapper;
