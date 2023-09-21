import { Batsman } from "./batsman";
import { Player } from "./player";

export default class PlayerMapper {
    static toDomain(player: any): Player {
        return new Batsman(player.id, player.name, player.role, player.credit);
    }
}