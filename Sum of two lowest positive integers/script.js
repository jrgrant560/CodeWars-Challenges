//SOURCE: https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
//Completion Time: ~32 mins

//BREAKDOWN:
// ) identify two lowest numbers
//   ) cycle through array to find lowest number, then add it to a separate array and drop it from the original array; perform twice
//   ) add the two numbers together

// ) return sum of the two lowest numbers

//identifies the two smallest numbers in an array, then returns their sum
function sumTwoSmallestNumbers(numbers) {  
    let lowestInt1 = Math.min(...numbers); //lowest integer
    numbers.splice(numbers.indexOf(lowestInt1),1); //removes lowestInt1
    
    let lowestInt2 = Math.min(...numbers); //2nd lowest integer
    numbers.splice(numbers.indexOf(lowestInt2),1); //removes lowestInt2
    
    return lowestInt1 + lowestInt2;
}


//----------
let testArray1 = [1501, 48676, 156982, 3581, 1200, 16, 1158, 2005];
let testArray2 = [15, 25, 6, 6, 83];
let testArray3 = [44, -10, 16, 4, 12]; //not sure how it wants me to handle negative integers

console.log(sumTwoSmallestNumbers(testArray3));