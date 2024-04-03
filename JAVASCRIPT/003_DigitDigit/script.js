// SOURCE: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// COMPLETION TIME: ~20 mins

function squareDigits(num){

    let numStringArray = (""+num).split("");
    
    let numIntArray = numStringArray.map(numString => parseInt(numString));
    
    let numSquaredArray = numIntArray.map(numIntArray => numIntArray * numIntArray);

    return parseInt(numSquaredArray.join(""));
}

let testNum = 3212;

console.log(squareDigits(testNum));