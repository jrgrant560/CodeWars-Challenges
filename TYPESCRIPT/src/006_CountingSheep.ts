//Completion Time: 

//BREAKDOWN: see comments

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    return arrayOfSheep.filter(item => (item == true)).length
  }

// CW top solution #1
// return arrayOfSheep.filter(Boolean).length; uses "Boolean" object instead of true test.

// CW top solution #2
// return arrayOfSheep.filter(e => e === true).length; basically the same thing
