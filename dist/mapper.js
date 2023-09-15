"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
class PlayerMapper {
    static toDomain(player) {
        return new player_1.Player(player.id, player.name, player.playingRole, player.credit);
    }
}
exports.default = PlayerMapper;
