//Completion Time: ~6 mins

//BREAKDOWN: new filtered array by all items == true, then count the length of that array

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    return arrayOfSheep.filter(item => (item == true)).length
  }

// CW top solution #1
// return arrayOfSheep.filter(Boolean).length; // basically the same thing; uses "Boolean" object instead of true test.

// CW top solution #2
// return arrayOfSheep.filter(e => e === true).length; // basically the same thing
