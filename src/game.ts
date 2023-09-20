import { Player } from "./player";
import { Shot } from "./shot";
import { Team } from "./team";

export class Game {
    private battingTeam!: Team;
    private bowlingTeam!: Team;
    private currentBatsman!: Player;
    private currentBowler!: Player;

    constructor(battingTeam: Team, bowlingTeam: Team) {
        this.battingTeam = battingTeam;
        this.bowlingTeam = bowlingTeam;
        this.changeBatsman();
        this.changeBowler();
    }

    hit(): void {
        this.currentBatsman.addBalls();
        this.bowlingTeam.addBalls();
        this.updateOver();
        let shot = Player.shots();
        this.addBowlingData(shot);
        this.addBattingData(shot);
        this.battingTeam.setRuns();
        this.battingTeam.setFantasyPoints();
        this.bowlingTeam.setRuns();
        this.bowlingTeam.setFantasyPoints();
    }

    updateOver(): void {
        if (this.bowlingTeam.getBalls() % 6 == 0) {
            this.bowlingTeam.addOvers();
            if (this.bowlingTeam.getOvers() == 5) {
                return;
            }
            this.changeBowler();
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

    countFantsayPoints(player: Player, shot: Shot): number {
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
        this.currentBatsman.setIsBat();
    }

    changeBowler(): void {
        this.currentBowler = this.bowlingTeam.getBowler();
        this.currentBowler.setIsBowl();
    }
}