import PlayerMapper from "./playerMapper";
import { Match } from "./match";
import { Team } from "./team";
import { playersData } from "./playersData";
import { Score } from "./score";
import { Game } from "./game";
import { Batsman } from "./batsman";

let team1 = new Team('RCB');
let team2 = new Team('CSK');

let match = new Match(team1, team2);
match.toss();

team1 = match.getBattingTeam();
team2 = match.getBowlingTeam();

// let batsmans = playersData.filter(player => {
//   if(player.playingRole == "Batsman"){

//     return player
//   }
// })
// let bowler = playersData.filter(player => {
//   if(player.playingRole == "Bowler"){
//     return player
//   }
// })
// let wicketKeeper = playersData.filter(player => {
//   if(player.playingRole == "Wicketkeeper"){
//     return player
//   }
// })

// let playersArray = [...batsmans, ...bowler, ...wicketKeeper]
let  playersArray = playersData.map(player => {
  if(player.playingRole == "Batsman"){

    return PlayerMapper.toDomain(player);
  }
});
console.log(playersArray);

let players = playersArray.slice(0, 11);
team1.addPlayer(players);

team1.setCaptain(players[2]);
team1.setViceCaptain(players[1]);

let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);
team2.setCaptain(players2[5]);
team2.setViceCaptain(players2[1]);

let firstInning = new Game(team1, team2);
match.startGame(firstInning);
let secondInning = new Game(team2, team1);
match.startGame(secondInning);

console.log();
let team1Score = new Score(team1);
team1Score.getScore()
let team2Score = new Score(team2);
team2Score.getScore()
let batsman = new Batsman(1, "abc", "Batsman", 2);
console.log
(batsman.getName())