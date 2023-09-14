import { Player } from "./player";

export default class PlayerMapper{
    toDomain(player : any){
        return new Player( player.id , player.name , player.playingRole , player.credit);
    }
}