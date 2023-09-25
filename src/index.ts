import {CricketerMapper} from "./cricketerMapper";
import { Match } from "./match";
import { Team } from "./team";
import { playersData } from "./playersData";
import { Score } from "./score";
import { Game } from "./game";

let team1 = new Team('RCB');
let team2 = new Team('CSK');

let match = new Game(team1, team2);
match.toss();
console.log('asdf');

team1 = match.getHomeTeam();
team2 = match.getOpponentTeam();

let  playersArray = playersData.map(player => {
    return CricketerMapper.toDomain(player);
    
});

let players = playersArray.slice(0, 11);
team1.addPlayer(players);

team1.setCaptain(players[0]);
team1.setViceCaptain(players[1]);

let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);
team2.setCaptain(players2[0]);
team2.setViceCaptain(players2[1]);

match.setOvers(50)
match.startGame();
// match.startGame();
match.changeInnings()

match.getWinner()
console.log();
let team1Score = new Score(team1);
team1Score.getScore()
let team2Score = new Score(team2);
team2Score.getScore()
