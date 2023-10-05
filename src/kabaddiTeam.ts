import { Iteam } from "./interface";
import { Player } from "./player";

export class KabaddiTeam implements Iteam {
  private players: Player[] = [];

  constructor(public name: string) {}

  addPlayer(players: Player[]): void {
    this.players = players;
  }

  getPlayers(): Player[] {
    return this.players;
  }
}