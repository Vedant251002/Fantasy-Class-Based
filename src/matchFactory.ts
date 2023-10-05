import { Cricket } from "./cricket";
import { Kabaddi } from "./kabaddi";
import { KabaddiTeam } from "./kabaddiTeam";
import { CricketTeam } from "./cricketTeam";

export class MatchFactory{
    createMatch(matchtype : number, team1Name: string, team2Name : string) : Cricket | Kabaddi{
        if(matchtype == 1){
            return new Cricket(new CricketTeam(team1Name), new CricketTeam(team2Name));
          }else{
            return new Kabaddi(new KabaddiTeam(team1Name), new KabaddiTeam(team2Name));
          }
    }
}