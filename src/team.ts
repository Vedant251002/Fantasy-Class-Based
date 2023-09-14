import {Player} from "./player";



export class Team{
    private players : Player[]

    constructor(public name : string){
        this.validateName();
        this.players = [];
    }
    
    validateName(){
        if(this.name == "" || this.name == " "){
            throw new Error("should not be blank")
        }
    }

    showTeam(){
        return this
    }

    showTeamPlayers(){
        return this.players
    }

    addPlayer(players: Player[]){
        let res = this.validateTeamPlayers(players)
        if(res){
            return
        }
        this.players = players
    }
    
    
    validateTeamPlayers(players : Player[]){
        
        if(players.length != 11){
            return true
        }
        let totalCredit = 0
        players.map(player => {
            totalCredit += player.getCredit();
        })
        // console.log(totalCredit);
        if(totalCredit > 100){
            return true
        }
    }

    removePlayer(id : number){
        this.players = this.players.filter( player => {
            if(player.getId() != id){
                return player
            }
        })
    }
}
