import { Player } from "./player";



export class Team {
    private players: Player[];

    private runs: number = 0;
    private wickets: number = 0;
    private over: number = 0;
    private fantasyPoints: number = 0;
    private balls: number = 0;

    static allowedBatsman: number = 5;
    static allowedBowler: number = 5;
    static allowedWicketKeeper: number = 1;

    constructor(public name: string) {
        this.validateName();
        this.players = [];
    }

    getName(): string {
        return this.name;
    }

    validateName(): void {
        if (this.name == "" || this.name == " ") {
            throw new Error("should not be blank");
        }
    }

    getTeam(): Team {
        return this;
    }

    getPlayers(): Player[] {
        return this.players;
    }

    addPlayer(players: Player[]): void {
        this.validatePlayers(players);
        this.validatePlayerRole(players);
        this.players = players;
    }


    validatePlayers(players: Player[]): void {

        if (players.length != 11) {
            throw new Error("Please add 11 players");
        }
        let totalCredit = 0;
        players.map(player => {
            totalCredit += player.getCredit();
        });

        if (totalCredit > 100) {
            throw new Error("Please add players that have total credits below 100");
        }
    }

    removePlayer(id: number): void {
        let playerIndex = this.players.findIndex(player => player.getId() == id);
        if (playerIndex == -1) {
            throw new Error('Player is not in team');
        }
        this.players.splice(playerIndex, 1);
    }

    validatePlayerRole(players: Player[]): void {
        let batsmanCount = players.filter(player => player.getRole() == "Batsman").length;
        let bowlerCount = players.filter(player => player.getRole() == "Bowler").length;
        let wicketKeeperCount = players.filter(player => player.getRole() == "Wicketkeeper").length;
        if (batsmanCount != Team.allowedBatsman) {
            throw new Error("Batsman Exceeded");
        }
        if (bowlerCount != Team.allowedBowler) {
            throw new Error("Bowler Exceeded");
        }
        if (wicketKeeperCount != Team.allowedWicketKeeper) {
            throw new Error("WicketKeeper Exceeded");
        }
    }

    setCaptain(player: Player): void {
        if (player.getIsViceCaptain()) {
            throw new Error("This player is already selected for captain or vice captain");
        }
        player.setIsCaptain();
    }

    setViceCaptain(player: Player): void {
        if (player.getIsCaptain()) {
            throw new Error("This player is already selected for captain or vice captain");
        }
        player.setIsViceCaptain();
    }

    getCaptain(): Player {
        return this.players.filter(player => player.getIsCaptain() == true)[0];
    }

    getViceCaptain(): Player {
        return this.players.filter(player => player.getIsViceCaptain() == true)[0];
    }

    setRuns(): void {
        this.runs = this.players.reduce((runs: number, player: Player) => {
            return runs + player.getRuns();
        }, 0);
    }
    setFantasyPoints(): void {
        this.fantasyPoints = this.players.reduce((points: number, player: Player) => {
            return points + player.getFantasyPoints();
        }, 0);
    }
    getRuns(): number {
        return this.runs;
    }
    getFantasyPoints(): number {
        return this.fantasyPoints;
    }

    getBatsman(): Player {

        return this.players.filter(player => {
            if (player.getIsBat() == false) {
                return player;
            }
        })[0];

    }
    getBowler(): Player {
        return this.players.filter(player => {
            if (player.getRole() == "Bowler" && player.getIsBowl() == false) {
                return player;
            }
        })[0];
    }
    addWickets(): void {
        this.wickets += 1;
    }
    getWickets(): number {
        return this.wickets;
    }
    addOvers(): void {
        this.over += 1;
    }
    getOvers(): number {
        return this.over;
    }

    addBalls(): void {
        this.balls += 1;
    }
    getBalls(): number {
        return this.balls;
    }
}
