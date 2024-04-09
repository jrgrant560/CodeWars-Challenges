//Completion Time: ~9 mins

//BREAKDOWN: if-else statements check value of "d" prop

export function rentalCarCost(d: number): number {

    // V1: if-else chain
    // if (d > 6) {
    //     return ((d*40)-50);
    // } else if (d > 2) {
    //     return ((d*40)-20);
    // } else {
    //     return (d*40);
    // }

    // REFACTORED: converted to ternary
    return d > 6
    ? ((d*40)-50)
    : d > 2
    ? ((d*40)-20)
    : d*40
    
}

// CW top solution (basically the same as my V1, just not converted to ternary)
    // if (d >= 7) return d * 40 - 50;
    // if (d >= 3) return d * 40 - 20
    // return d * 40;