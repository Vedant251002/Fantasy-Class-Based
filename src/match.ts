import { Player } from "./player";
import { Shot } from "./shot";
import { Team } from "./team";

export class Match {
    private battingTeam: Team;
    private bowlingTeam: Team;
    private currentBatsman!: Player;
    private currentBowler!: Player;

    constructor(team1: Team, team2: Team) {
        if (team1.name == team2.name) {
            throw new Error('Both team names are same');
        }
        this.battingTeam = team1;
        this.bowlingTeam = team2;
    }

    toss(): void {
        let random = Math.floor(Math.random() * 2);
        if (random == 1) {
            let temp = this.battingTeam;
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp;
        }
    }

    getBattingTeam(): Team {
        return this.battingTeam;
    }

    getBowlingTeam(): Team {
        return this.bowlingTeam;
    }

    getTossWinnerTeam(): Team {
        return this.battingTeam;
    }

    getTossLoserTeam(): Team {
        return this.bowlingTeam;
    }

    getCurrentBatsman(): Player {
        return this.currentBatsman;
    }

    getCurrentBowler(): Player {
        return this.currentBowler;
    }

    startGame(): void {
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
        if (this.bowlingTeam.getBalls() == 30) {
            this.bowlingTeam.addOvers();
            // this.battingTeam.setIsPlayed();
            return this.changeInnings();
        }
        if (this.bowlingTeam.getBalls() % 6 == 0) {
            this.changeBowler();
            this.bowlingTeam.addOvers();
        }
    }

    changeInnings(): void {
        if (this.battingTeam.getOvers() == 5) {
            this.getScoreBoard();
        } else {
            let temp = this.battingTeam;
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp;
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
        this.currentBatsman.addBalls();
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

    getScoreBoard(): void {
        console.log(this.getWinner().getName(), 'has won the match');
        this.playerScore(this.battingTeam);
        console.log('                                                                     ');
        console.log('====================================================================');
        console.log('                                                                     ');
        this.playerScore(this.bowlingTeam);
    }

    playerScore(team: Team): void {
        let teamScore = `${team.getName()}  -- ${team.getRuns()}/${team.getWickets()}  -- Fantasy points - ${team.getFantasyPoints()}`;
        console.log(teamScore);
        team.getPlayers().map((player, index) => {
            console.log('------------------------------------------------------------------');
            console.log
                (`${index + 1}  ${player.getName()} -- runs - ${player.getRuns()}  -- wickets - ${player.getWicket()} -- fantasy points - ${player.getFantasyPoints()}`);
        });
    }

    getWinner() {
        return this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints() ? this.battingTeam : this.bowlingTeam;

    }
}
