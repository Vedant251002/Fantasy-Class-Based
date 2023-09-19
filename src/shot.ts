export class Shot{
    private name
    private point
    private runs
    constructor( name : string, point : number, runs : number){
        this.name = name
        this.point = point
        this.runs = runs
    }
    getName() : string{
        return this.name
    }
    getPoint() : number {
        return this.point
    }
    getRuns() : number {
        return this.runs
    }
}