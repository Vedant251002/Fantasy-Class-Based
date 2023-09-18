
const shots = [
    { name: "Single", point: 1, runs: 1 },
    { name: "Double", point: 2, runs: 2 },
    { name: "Triple", point: 3, runs: 3 },
    { name: "Boundary", point: 5, runs: 4 },
    { name: "Six", point: 8, runs: 6 },
    { name: "DotBall", point: 1, runs: 0 },
    { name: "Wicket", point: 10, runs: 0 },
  ];

export class Player{
    private id : number
    private name : string 
    private role : string 
    private credit : number 
    private runs : number = 0
    private balls : number = 0
    private isCaptain : boolean = false
    private isViceCaptain : boolean = false
    private fantasyPoints : number = 0

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
        let random =  Math.floor(Math.random() * 7)
        return shots[random]
    }

    addRuns(runs : number) : void{
        this.runs += runs
    }
    getRuns() : number{
      return  this.runs
    }
    addFantasyPoints(points : number ) : void{
        // this.fantasyPoints += this.isCaptain ? points * 2 : this.isViceCaptain ? points * 1.5 : points
        this.fantasyPoints += points
    }
    addBalls(){
        this.balls += 1
    }
    getBalls(){
        return this.balls
    }
}
