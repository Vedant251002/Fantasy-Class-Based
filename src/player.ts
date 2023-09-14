
export class Player{
    private id
    private name
    private role
    private credit
    constructor( id : number, name : string , role : string , credit : number){
        this.id = id;
        this.name = name;
        this.role = role;
        this.credit = credit;        
    }

    getPlayer(){
        return this
    }
    getId(){
        return this.id
    }
    getCredit(){
        return this.credit
    }
}
