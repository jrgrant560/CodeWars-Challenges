//SOURCE: https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
//Completion Time: ~1:05

// n^3 + (n−1)^3 + (n−2)^3 + ... + 1^3 = m
//BREAKDOWN: see comments


//NOTED BUG-FIX: I originally repated this function over and over; the solution was to merge it into the for loop, eliminating a lot of repeat calculations
// function sumIncrementalCubes(int) { //increments 'int' number of cubes (in descending order), and returns the sum of all cubes
//     let sum = 0; //starting value of sum;
//     for (let i = int; i > 0; i--) { //cube i and add to sum; continue until i = 0
//         sum += Math.pow(i, 3);
//     }
//     return sum;
// }


//find the number of cubes that add up to "m" volume, or return -1 if not valid
function findNb(m) {
    let n = -1; //default value for n unless it passes the operation
    let sum = 0; //starting value of sum;

    for (let i = 1; sum <= m; i++) { //perform sumIncrementalCubes operation on ascending integers until the result equals or exceeds 'm'
        sum += Math.pow(i, 3); //cube i and add to sum
        if (sum == m) { //if sumIncrementalCubes(i) equals 'm', assign the integer to 'n'
            n = i;
        }
    }

    return n;
}


//----------
let testVolume1 = 135440716410000;
let testVolume2 = 135440716410000135440716410000;

console.log(findNb(testVolume1));