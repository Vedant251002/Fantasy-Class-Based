import {Player} from "./player";



export class Team{
    private players : Player[]
    
    private runs : number = 0
    private wcikets : number = 0
    private over : number = 0

    static allowedBatsman : number = 5
    static allowedBowler : number = 5
    static allowedWicketKeeper : number = 1

    constructor(public name : string){
        this.validateName();
        this.players = [];
    }
    
    validateName() : void {
        if(this.name == "" || this.name == " "){
            throw new Error("should not be blank")
        }
    }

    getTeam() : Team{
        return this
    }

    getPlayers() : Player[]{
        return this.players
    }

    addPlayer(players: Player[]) : void{
        this.validatePlayers(players)
        this.validatePlayerRole(players)
        this.players = players
    }
    
    
    validatePlayers(players : Player[]) : void  {
        
        if(players.length != 11){
            throw new Error("Please add 11 players")
        }
        let totalCredit = 0
        players.map(player => {
            totalCredit += player.getCredit();
        })
        
        if(totalCredit > 100){
            throw new Error("Please add players that have total credits below 100")
        }
    }

    removePlayer(id : number) : void {
        let playerIndex = this.players.findIndex( player => player.getId() == id)
        if(playerIndex == -1){
            throw new Error('Player is not in team')
        }
        this.players.splice(playerIndex , 1)
    }

    validatePlayerRole( players : Player[]) : void {
        let batsmanCount = players.filter(player => player.getRole() == "Batsman").length
        let bowlerCount = players.filter(player => player.getRole() == "Bowler").length
        let wicketKeeperCount = players.filter(player => player.getRole() == "Wicketkeeper").length
        if(batsmanCount != Team.allowedBatsman){
            throw new Error("Batsman Exceeded")
        } 
        if(bowlerCount != Team.allowedBowler){
            throw new Error("Bowler Exceeded")
        }
        if(wicketKeeperCount != Team.allowedWicketKeeper){
            throw new Error("WicketKeeper Exceeded")
        }
    }

    setCaptain(player : Player) : void {
        player.isSame()
        player.setIsCaptain();
    }

    setViceCaptain(player : Player) : void {
        player.isSame()
        player.setIsViceCaptain()
    }
    
    getCaptain() : Player{
        return this.players.filter(player => player.getIsCaptain() == true)[0]
    }

    getViceCaptain() : Player{
        return this.players.filter(player => player.getIsViceCaptain() == true)[0]
    }

    sortPlayers(){
        let batsmans : Player[] = []
        let bowlers  :  Player[] = []
        let wicketkeepers : Player[] = []
        this.players.map( player => {
            if( player.getRole() == "Batsman"){
                batsmans.push(player)
            }
            else if( player.getRole() == "Bowler"){
                bowlers.push(player)
            }
            else{
                wicketkeepers.push(player)
            }
        })
        this.players = [ ...batsmans , ...bowlers , ...wicketkeepers]
    }

    setRuns(runs : number){
        this.runs += runs
    }
    getRuns(){
      return  this.runs
    }

}
