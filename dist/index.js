"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricketerMapper_1 = require("./cricketerMapper");
const match_1 = require("./match");
const cricketTeam_1 = require("./cricketTeam");
const playersData_1 = require("./playersData");
const cricket_1 = require("./cricket");
const matchFactory_1 = require("./matchFactory");
const score_1 = require("./score");
let prompt = require('prompt-sync')();
let match;
let matchtype = prompt('Which game do you wanna play 1) Cricket 2) Kabaddi');
let team1Name = prompt('Enter 1st team name');
let team2Name = prompt('Enter 2nd team name');
let matchFactory = new matchFactory_1.MatchFactory();
match = matchFactory.createMatch(matchtype, team1Name, team2Name);
let tossDecider = new match_1.TossDecider();
tossDecider.toss(match);
let team1 = tossDecider.getTossWinnerTeam(match);
let team2 = tossDecider.getTossLoserTeam(match);
let playersArray = playersData_1.playersData.map(player => {
    return cricketerMapper_1.CricketerMapper.toDomain(player);
});
let players = playersArray.slice(0, 11);
team1.addPlayer(players);
let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);
if (match instanceof cricket_1.Cricket) {
    // team1.setCaptain(players[0]);
    // team1.setViceCaptain(players[1]);
    // team2.setCaptain(players2[0]);
    // team2.setViceCaptain(players2[1]);
    match.setOvers(5);
    match.getOvers();
    match.startGame();
    match.changeInnings();
}
match.getWinner();
console.log();
if (team1 instanceof cricketTeam_1.CricketTeam && team2 instanceof cricketTeam_1.CricketTeam) {
    let team1Score = new score_1.Score(team1);
    team1Score.getScore();
    let team2Score = new score_1.Score(team2);
    team2Score.getScore();
}
