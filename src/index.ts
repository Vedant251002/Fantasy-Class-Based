import {CricketerMapper} from "./cricketerMapper";
import { TossDecider } from "./match";
import { CricketTeam } from "./cricketTeam";
import { playersData } from "./playersData";
import { Cricket } from "./cricket";
import { Kabaddi } from "./kabaddi";
import { KabaddiTeam } from "./kabaddiTeam";
import { MatchFactory } from "./matchFactory";
import { Score } from "./score";

let prompt = require('prompt-sync')()

let match: Cricket | Kabaddi
let matchtype = prompt('Which game do you wanna play 1) Cricket 2) Kabaddi')
let team1Name = prompt('Enter 1st team name')
let team2Name = prompt('Enter 2nd team name')

let matchFactory = new MatchFactory();
 match = matchFactory.createMatch(matchtype, team1Name, team2Name)

let tossDecider = new TossDecider()
tossDecider.toss(match);

let team1 = tossDecider.getTossWinnerTeam(match);
let team2 = tossDecider.getTossLoserTeam(match);

let  playersArray = playersData.map(player => {
    return CricketerMapper.toDomain(player);
});

let players = playersArray.slice(0, 11);
team1.addPlayer(players);


let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);

if (match instanceof Cricket ) {
  // team1.setCaptain(players[0]);
  // team1.setViceCaptain(players[1]);
  // team2.setCaptain(players2[0]);
  // team2.setViceCaptain(players2[1]);
  match.setOvers(5)
  match.getOvers()
  match.startGame()
  match.changeInnings()
}


match.getWinner()

console.log();

if(team1 instanceof CricketTeam && team2 instanceof CricketTeam){

  let team1Score = new Score(team1);
  team1Score.getScore()
  let team2Score = new Score(team2);
  team2Score.getScore()
}