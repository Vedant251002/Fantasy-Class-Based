import { Cricket } from "./cricket";
import { Imatch, Iteam } from "./interface";
import { Kabaddi } from "./kabaddi";

export class TossDecider{
    
    toss(match : Imatch){
        match.toss()
    }
    getTossWinnerTeam(match : Imatch): Iteam {
       return match.getTossWinnerTeam();
    }

    getTossLoserTeam(match : Imatch ): Iteam {
        return match.getTossLoserTeam();
    }


    /* setOvers(match : Cricket, over: number){
        match.setOvers(over)
    } */
}