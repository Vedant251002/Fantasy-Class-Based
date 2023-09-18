
export class Player{
    private id : number
    private name : string 
    private role : string 
    private credit : number 
    private runs : number = 0
    private isCaptain : boolean = false
    private isViceCaptain : boolean = false

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
    setIsCaptain() : void{
        this.isCaptain = true
    }
    setIsViceCaptain() : void{
        this.isViceCaptain = true
    }
    getIsCaptain() : boolean{
        return this.isCaptain
    }
    getIsViceCaptain() : boolean{
        return this.isViceCaptain
    }
    isSame() : boolean{
        if(this.isCaptain === this.isViceCaptain){
            return true
        }
        throw new Error("This player is selected before in captain or vice captain")
    }

    static shots(){
        return Math.floor(Math.random() * 7)
    }

    setRuns(runs : number){
        this.runs += runs
    }
    getRuns(){
      return  this.runs
    }
}
