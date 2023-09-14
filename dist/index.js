"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapper_1 = __importDefault(require("./mapper"));
const match_1 = require("./match");
const team_1 = require("./team");
const playersData_1 = require("./playersData");
let team1 = new team_1.Team('RCB');
let team2 = new team_1.Team('CSK');
let match = new match_1.Match(team1, team2);
match.toss();
team1 = match.showBattingTeam();
team2 = match.showBowlingTeam();
let playerMap = new mapper_1.default();
let playersArray = playersData_1.playersData.map(player => {
    return playerMap.toDomain(player);
});
let players = playersArray.slice(0, 11);
team1.addPlayer(players);
let players2 = playersArray.slice(11, 22);
team2.addPlayer(players2);
team1.removePlayer(1);
