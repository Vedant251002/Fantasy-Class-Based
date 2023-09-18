import { Player } from "./player";
import { Team } from "./team";

export class Match {
    private battingTeam: Team;
    private bowlingTeam: Team;
    private currentBatsman! : Player 
    private currentBowler! : Player

    constructor(team1: Team, team2: Team) {
        if (team1.name == team2.name) {
            throw new Error('Both team names are same')
        }
        this.battingTeam = team1;
        this.bowlingTeam = team2;
    }
    toss() : void{
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.battingTeam
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp
        }
    }
    getBattingTeam() {
        return this.battingTeam
    }
    getBowlingTeam() {
        return this.bowlingTeam
    }
    getTossWinnerTeam() {
        return this.battingTeam
    }
    getTossLoserTeam() {
        return this.bowlingTeam
    }

    startGame(){
        this.battingTeam.sortPlayers()
        this.bowlingTeam.sortPlayers()
        this.currentBatsman = this.battingTeam.getPlayers()[0]
        this.currentBowler = this.bowlingTeam.getPlayers()[5]
        this.hit()
        this.hit()
    }

    hit(){
        let shot = Player.shots()
        
        if(shot == 5){
            this.changeBatsman()
        }
        else{
            this.currentBatsman.setRuns(shot)
            this.battingTeam.setRuns(shot)
        }
    }

    changeBatsman(){
       let index =  this.battingTeam.getPlayers().findIndex( player => player == this.currentBatsman)
        this.currentBatsman = this.battingTeam.getPlayers()[++index]
    }

}