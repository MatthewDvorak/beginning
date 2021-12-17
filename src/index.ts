import {dayOneInputAoc as depths} from "./day-one-input-aoc";

function dayOne() {
    let numberOfIncreasedDepths = 0;
    for (let i = 1; i < depths.length; i++){
        if (depths[i]>depths[i - 1]){
            numberOfIncreasedDepths = numberOfIncreasedDepths + 1;
        }
    }
    console.log(numberOfIncreasedDepths);
}

dayOne();