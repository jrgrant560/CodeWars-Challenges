//SOURCE: https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
//Completion Time: ~16 mins

//BREAKDOWN: see comments

//check if a number is a Narcissistic Number
function narcissistic(value) {
    let digArray = (""+value).split("").map(x => { return parseInt(x); }); //splits n into an array of its digits
    let digPowArray = digArray.map((digit, i, arr) => Math.pow(digit, arr.length)); //raises each digit in the array to the power that is the length of the array
    let digPowSum = digPowArray.reduce(function(a, b) { return a + b; }); //adds all digits together
    
    return digPowSum == value;
}

// ---------
let testNum1 = 153;
let testNum2 = 1541;
let testNum3 = 6482649;

console.log(narcissistic(3557));