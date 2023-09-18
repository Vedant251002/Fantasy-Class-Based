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

    getCurrentBatsman(){
        return this.currentBatsman
    }
    getCurrentBowler(){
        return this.currentBowler
    }
    startGame(){
        this.battingTeam.sortPlayers()
        this.bowlingTeam.sortPlayers()
        this.currentBatsman = this.battingTeam.getPlayers()[0]
        this.currentBowler = this.bowlingTeam.getPlayers()[5]
    }

    hit(){
        this.currentBowler.addBalls()
        let shot = Player.shots()
        if(shot.name == 'Wicket' || shot.name == "DotBall"){
            this.addBowlingData(shot)
        }else{
            this.addBattingData(shot)
        }
        if(this.currentBowler.getBalls() == 6){
            this.changeBowler()
            this.bowlingTeam.addOvers()
        }
        console.log(this.bowlingTeam.getOvers(),'.',this.currentBowler.getBalls());
        
    }

    addBowlingData(shot: { name: string; point: number; runs: number; }){
        let fantasyPoints = this.currentBowler.getIsCaptain() ? shot.point * 2 : this.currentBowler.getIsViceCaptain() ? shot.point * 1.5 : shot.point

        if(shot.name == "Wicket"){
            if(this.currentBatsman.getRuns() == 0){
                this.currentBatsman.addFantasyPoints(-2)
            }
            this.changeBatsman()
            this.battingTeam.addWickets()
            this.bowlingTeam.addFantasyPoints(fantasyPoints , this.currentBowler)
        }
        else if(shot.name == "DotBall"){
            this.bowlingTeam.addFantasyPoints(fantasyPoints , this.currentBowler)
        }
    }

    addBattingData(shot : { name: string; point: number; runs: number; }){
        let fantasyPoints = this.currentBatsman.getIsCaptain() ? shot.point * 2 : this.currentBatsman.getIsViceCaptain() ? shot.point * 1.5 : shot.point
        this.battingTeam.addRuns(shot.runs , this.currentBatsman)
        this.battingTeam.addFantasyPoints(fantasyPoints , this.currentBatsman)
    }

    changeBatsman(){
       let index =  this.battingTeam.getPlayers().findIndex( player => player == this.currentBatsman)+1
        this.currentBatsman = this.battingTeam.getPlayers()[index]
    }

    changeBowler(){
        let index =  this.bowlingTeam.getPlayers().findIndex( player => player == this.currentBowler)+1
        this.currentBowler = this.bowlingTeam.getPlayers()[index]
    }
}   