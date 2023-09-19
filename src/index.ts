import PlayerMapper from "./playerMapper";
import {Match} from "./match";
import {Team} from "./team";
import { playersData } from "./playersData";

let team1 = new Team('RCB')
let team2 = new Team('CSK')

let match = new Match(team1 , team2);
match.toss();

team1 = match.getBattingTeam();
team2 = match.getBowlingTeam();

let playersArray = playersData.map(player => {
  return PlayerMapper.toDomain(player);
})


let players = playersArray.slice(0,11)
team1.addPlayer(players)

team1.setCaptain(players[2])
team1.setViceCaptain(players[1])

let players2 = playersArray.slice(11,22)
team2.addPlayer(players2)
team2.setCaptain(players2[5])
team2.setViceCaptain(players2[1])
  match.startGame()

  for(let i = 1 ; i <= 60 ; i++){
    match.hit()
  }