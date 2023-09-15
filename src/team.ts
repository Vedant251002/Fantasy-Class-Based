import {Player} from "./player";



export class Team{
    private players : Player[]
    private captain : Player | null = null
    private viceCaptain : Player | null = null
    // private batsmanCount : number = 0
    static batsmans : number = 5
    static bowlers : number = 5
    static wicketKeepers : number = 1

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

    getTeamPlayers() : Player[]{
        return this.players
    }

    addPlayer(players: Player[]) : void{
        let res = this.validatePlayers(players)
        if(res){
            return console.log("Please add players that have sum of 100 credit");
        }
        let response = this.validatePlayerRole(players)
        if(response){
            this.players = players
        }
    }
    
    
    validatePlayers(players : Player[]) : boolean  {
        
        if(players.length != 11){
            return true
        }
        let totalCredit = 0
        players.map(player => {
            totalCredit += player.getCredit();
        })
        if(totalCredit > 100){
            return true
        }
        return false
    }

    removePlayer(id : number) : void {
        this.players = this.players.filter( player => {
            if(player.getId() != id){
                return player
            }
        })
    }

    validatePlayerRole( players : Player[]) : boolean {
        let batsmanCount = players.filter(player => player.getRole() == "Batsman").length
        let bowlerCount = players.filter(player => player.getRole() == "Bowler").length
        let wicketKeeperCount = players.filter(player => player.getRole() == "Wicketkeeper").length
        if(batsmanCount != Team.batsmans){
             console.log("Batsman Exceeded")
             return false
        }
        if(bowlerCount != Team.bowlers){
            
             console.log("Bowler Exceeded")
             return false
        }
        if(wicketKeeperCount != Team.wicketKeepers){
            
             console.log("WicketKeeper Exceeded")
             return false
        }
        return true
    }

    checkSameCapViceCap(captain : Player | null , viceCaptain : Player | null) : void {
        if(captain === viceCaptain){
            throw new Error("captain and vice captain are same")
        }
    }

    setCaptain(id : number) : void {
        let captain = this.players.find(player => (id == player.getId()))
        
        if(captain){
            
            this.checkSameCapViceCap(captain, this.viceCaptain)
            this.captain = captain
        }
    }
    setViceCaptain(id : number) : void {

        let viceCaptain = this.players.find(player => (id == player.getId()))

        if(viceCaptain){
            this.checkSameCapViceCap(this.captain , viceCaptain)
            this.viceCaptain = viceCaptain
        }
    }
}
