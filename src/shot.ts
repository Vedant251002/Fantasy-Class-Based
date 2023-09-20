export const shots = [
    { name: "Single", point: 1, runs: 1 },
    { name: "Double", point: 2, runs: 2 },
    { name: "Triple", point: 3, runs: 3 },
    { name: "Boundary", point: 5, runs: 4 },
    { name: "Six", point: 8, runs: 6 },
    { name: "DotBall", point: 1, runs: 0 },
    { name: "Wicket", point: 10, runs: 0 },
];

export class Shot {
    private name;
    private point;
    private runs;
    constructor(name: string, point: number, runs: number) {
        this.name = name;
        this.point = point;
        this.runs = runs;
    }
    getName(): string {
        return this.name;
    }
    getPoint(): number {
        return this.point;
    }
    getRuns(): number {
        return this.runs;
    }
}