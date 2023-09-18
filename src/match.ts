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
        // this.battingTeam.sortPlayers()
        // this.bowlingTeam.sortPlayers()
        this.changeBatsman()
        this.changeBowler()
    }

    hit(){
        this.bowlingTeam.setBalls()
        // this.currentBowler.addBalls()
        if(this.bowlingTeam.getBalls() == 30){
            this.bowlingTeam.addOvers()
            console.log(this.bowlingTeam.getOvers() , this.bowlingTeam.getBalls());
            this.battingTeam.setIsPlayed()
            if(!this.bowlingTeam.getIsPlayed()){
                this.changeInnings()
            }else{
                // throw new Error('played')
                console.log('done');
                return
            }
        }
        if(this.bowlingTeam.getBalls() % 6 == 0){
            this.changeBowler()
            console.log(this.bowlingTeam.getOvers() , this.bowlingTeam.getBalls());
            
            this.bowlingTeam.addOvers()
        }
        // console.log(this.bowlingTeam.getBalls() % 6);
        let shot = Player.shots()
        if(shot.name == 'Wicket' || shot.name == "DotBall"){
            this.addBowlingData(shot)
        }else{
            this.addBattingData(shot)
        }
        
        this.battingTeam.setRuns()
        this.battingTeam.setFantasyPoints()
        this.bowlingTeam.setRuns()
        this.bowlingTeam.setFantasyPoints()
        
    }
    changeInnings() {
        let temp = this.battingTeam;
        this.battingTeam = this.bowlingTeam;
        this.bowlingTeam = temp
    }

    addBowlingData(shot: { name: string; point: number; runs: number; }){
        let fantasyPoints = this.currentBowler.getIsCaptain() ? shot.point * 2 : this.currentBowler.getIsViceCaptain() ? shot.point * 1.5 : shot.point

        if(shot.name == "Wicket"){
            if(this.currentBatsman.getRuns() == 0){
                this.currentBatsman.addFantasyPoints(-2)
            }
            this.changeBatsman()
            this.battingTeam.addWickets()
            this.currentBowler.addFantasyPoints(fantasyPoints)
        }
        else if(shot.name == "DotBall"){
            this.currentBowler.addFantasyPoints(fantasyPoints)
        }
    }

    addBattingData(shot : { name: string; point: number; runs: number; }){
        let fantasyPoints = this.currentBatsman.getIsCaptain() ? shot.point * 2 : this.currentBatsman.getIsViceCaptain() ? shot.point * 1.5 : shot.point
        this.currentBatsman.addBalls()
        this.currentBatsman.addRuns(shot.runs )
        this.currentBatsman.addFantasyPoints(fantasyPoints)

    }

    changeBatsman(){
        this.currentBatsman =  this.battingTeam.getBatsman()
        this.currentBatsman.setIsBat()
    }

    changeBowler(){
        this.currentBowler = this.bowlingTeam.getBowler()
        this.currentBowler.setIsBowl()
    }
}   