import { Cricketer } from "./cricketer";
import { Imatch } from "./interface";
import { Player } from "./player";
import { Shot } from "./shot";
import { CricketTeam } from "./cricketTeam";

/* export interface Icricket{
    setOvers(over : number): void
    startGame(): void
    changeInnings(): void
} */

export class Cricket implements Imatch {
    private battingTeam!: CricketTeam;
    private bowlingTeam!: CricketTeam;
    private currentBatsman!: Cricketer;
    private currentBowler!: Cricketer;
    private overs : number = 0;

    constructor(battingTeam: CricketTeam, bowlingTeam: CricketTeam) {
        if (battingTeam.name == bowlingTeam.name) {
            throw new Error('Both team names are same');
        }
        this.battingTeam = battingTeam;
        this.bowlingTeam = bowlingTeam;

    }
    toss(): void {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.battingTeam;
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp;
        }
         console.log(`${this.battingTeam.getName()} has won the toss !`);
         
        
    }
    hit(): void {
        if (this.battingTeam.getWickets() == 10) {
            return 
        }
        this.currentBatsman.addBalls();
        
        this.bowlingTeam.addBalls();
        this.updateOver();
        let shot = Shot.shots();
        this.addBowlingData(shot);
        this.addBattingData(shot);
    }

    updateOver(): void {
        if (this.bowlingTeam.getBalls() % 6 == 0) {
            this.bowlingTeam.addOvers();
            if (this.bowlingTeam.getOvers() == this.overs) {
                return;
            }
            if(this.currentBowler.getOver() == (this.overs / 5)){                
                this.changeBowler();
            }else{

                this.currentBowler.addOver()
            }
        }
    }
    addBowlingData(shot: Shot): void {
        let fantasyPoints = this.countFantsayPoints(this.currentBowler, shot);

        if (shot.getName() == "Wicket") {
            if (this.currentBatsman.getRuns() == 0) {
                this.currentBatsman.addFantasyPoints(-2);
            }
            this.changeBatsman();
            this.battingTeam.addWickets();
            this.currentBowler.addWickets();
            this.currentBowler.addFantasyPoints(fantasyPoints);
        } else if (shot.getName() == "DotBall") {
            this.currentBowler.addFantasyPoints(fantasyPoints);
        }
    }

    countFantsayPoints(player: Cricketer, shot: Shot): number {
        return player.getIsCaptain() ? shot.getPoint() * 2 : player.getIsViceCaptain() ? shot.getPoint() * 1.5 : shot.getPoint();
    }

    addBattingData(shot: Shot): void {
        if (shot.getName() != "Wicket" && shot.getName() != "DotBall") {
            let fantasyPoints = this.countFantsayPoints(this.currentBatsman, shot);
            this.currentBatsman.addRuns(shot.getRuns());
            this.currentBatsman.addFantasyPoints(fantasyPoints);
        }
    }

    changeBatsman(): void {
        this.currentBatsman = this.battingTeam.getBatsman();
        
        if(this.currentBatsman){

            this.currentBatsman.setIsBat();
        }
    }

    changeBowler(): void {
        this.currentBowler = this.bowlingTeam.getBowler();
    }

    getCurrentBatsman(): Player {
        return this.currentBatsman;
    }

    getCurrentBowler(): Player {
        return this.currentBowler;
    }
    setOvers(over : number){
        this.overs = over
    }
    getOvers(): number{
        return this.overs
    }
    autoPlay(){
        for (let i = 1; i <= this.overs * 6; i++) {
            this.hit();
        }

    }
    startGame(): void {
        this.battingTeam = this.getHomeTeam();
        this.bowlingTeam = this.getOpponentTeam();
        this.changeBatsman();
        this.changeBowler();
        this.autoPlay()
        
    }
    changeInnings(){
        let temp = this.battingTeam
        this.battingTeam = this.bowlingTeam; 
        this.bowlingTeam = temp
        this.changeBatsman();
        this.changeBowler();
        this.autoPlay()

    }
    getTossWinnerTeam(): CricketTeam {
        return this.battingTeam;
    }

    getTossLoserTeam(): CricketTeam {
        return this.bowlingTeam;
    }
    getHomeTeam(): CricketTeam {
        return this.battingTeam;
    }

    getOpponentTeam(): CricketTeam {
        return this.bowlingTeam;
    }
    getWinner() {
        let winner: CricketTeam = this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints() ? this.battingTeam : this.bowlingTeam;
        return console.log(winner.getName(), 'has won the match');
    }
}