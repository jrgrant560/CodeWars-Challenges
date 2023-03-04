//SOURCE: https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript
//Completion Time: ~30 mins

//BREAKDOWN: 

//split a number to its multiples of 10 or 1
function expandedForm(num) {
    let digArray = (""+num).split("").map(x => { return parseInt(x); }); //splits number into an array of its digits
    let digExpandedArray = digArray.map((e, i, arr) => ( // array of each digit multiplied by its respective decimal value      
        e * Math.pow(10, (arr.length - 1 - i))
    ));
    let digExpandedArrayNonZeroed = digExpandedArray.filter(digExpanded => digExpanded != 0); // array without any 0's
    return digExpandedArrayNonZeroed.join(' + '); //joins all digExpandedArrayNonZeroed numbers into string
}

// ---------
let testNum = 12508;

console.log(expandedForm(testNum));