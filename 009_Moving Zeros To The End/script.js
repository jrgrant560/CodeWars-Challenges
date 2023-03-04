//SOURCE: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
//Completion Time: ~ 30 mins

//BREAKDOWN: see comments

//move all elements that equal 0 to the end of the array
function moveZeros(arr) {
    let zeroElems = arr.filter(element => element === 0); //array of all 0 elems
    let nonZeroElems = arr.filter(element => element !== 0); //array of non-zero elems
    return nonZeroElems.concat(zeroElems); // return concatenated two arrays
}


// ---------
let testArr = [false,1,0,1,2,0,1,3,"a"];
let testArr2 = [35, 50, 0, 0, 8, 1, 0]
console.log(moveZeros(testArr));