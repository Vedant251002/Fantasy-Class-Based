
export class Player{
    private id : number
    private name : string 
    private role : string 
    private credit : number 
    
    constructor( id : number, name : string , role : string , credit : number){
        this.id = id;
        this.name = name;
        this.role = role;
        this.credit = credit;        
    }

    getPlayer() : Player {
        return this
    }
    getId() : number {
        return this.id
    }
    getCredit() : number {
        return this.credit
    }
    getRole() : string {
        return this.role
    }
}
