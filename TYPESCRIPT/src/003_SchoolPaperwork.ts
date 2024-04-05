//Completion Time: ~3 mins

//BREAKDOWN: if n or m are less than or equal to 0, return 0. Else, return the multiplication result.

export function paperwork(n: number, m: number): number {
    if (n <= 0 || m <= 0) {
        return 0;
    } else {
        return n * m;
    }
}

// CW top solution:
//return (n < 1 || m < 1) ? 0 : n * m; // basically the same, but using ternary instead of If-else statement