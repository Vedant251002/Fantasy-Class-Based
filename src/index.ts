import PlayerMapper from "./mapper";
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
// console.log(team1.getCaptain())
// console.log(team1.getViceCaptain())
// team1.setViceCaptain(2)

// console.log(match.getBattingTeam().getTeamPlayers());

let players2 = playersArray.slice(11,22)
team2.addPlayer(players2)
team2.setCaptain(players2[5])
team2.setViceCaptain(players2[1])
  // team1.removePlayer(1)
  match.startGame()
  // match.hit()
  // console.log(match.getCurrentBowler());
  // match.hit()
  // match.hit()
  // match.hit()
  // match.hit()
  // match.hit()
  // console.log(match.getCurrentBowler());
  // match.hit()
  // console.log(match.getCurrentBatsman());
  // console.log(match.getCurrentBowler());
  // console.log(match.getBattingTeam().getFantasy());
  for(let i = 1 ; i <= 60 ; i++){
    // console.log(i);
    
    match.hit()

  }
  // for(let i = 1 ; i <= 29 ; i++){
  //   // console.log(i);
    
  //   match.hit()

  // }
  console.log(match.getBattingTeam());
  console.log(match.getBowlingTeam());
  
  // console.log(match.getBowlingTeam().getOvers(),'.',match.getCurrentBowler().getBalls());
  
