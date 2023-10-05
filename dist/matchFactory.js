"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchFactory = void 0;
const cricket_1 = require("./cricket");
const kabaddi_1 = require("./kabaddi");
const kabaddiTeam_1 = require("./kabaddiTeam");
const cricketTeam_1 = require("./cricketTeam");
class MatchFactory {
    createMatch(matchtype, team1Name, team2Name) {
        if (matchtype == 1) {
            return new cricket_1.Cricket(new cricketTeam_1.CricketTeam(team1Name), new cricketTeam_1.CricketTeam(team2Name));
        }
        else {
            return new kabaddi_1.Kabaddi(new kabaddiTeam_1.KabaddiTeam(team1Name), new kabaddiTeam_1.KabaddiTeam(team2Name));
        }
    }
}
exports.MatchFactory = MatchFactory;
