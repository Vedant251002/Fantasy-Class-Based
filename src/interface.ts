import { Player } from "./player";

export interface Imatch{
    toss() : void
    getTossLoserTeam(): Iteam 
    getTossWinnerTeam(): Iteam
    getWinner() : void
}
export interface Iteam{
    addPlayer(players: Player[]) : void
}