//SOURCE: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
//Completion Time: ~30 mins

//BREAKDOWN:
// ) compare all items to first item until a difference is found
// ) if the first two items are different, check the third item for the unique one

// find the unique number (float)
function findUniq(arr) {

    return (arr[0] == arr[1]) || (arr[0] == arr[2]) // if first item matches second or third item...
        ? arr.filter((elem, i, arr) => elem != arr[0])[0] // then, filter entire array against first item
        : arr[0]; // ELSE, if first item doesn't match second or third item, the first item is the unique one!

    //EXPANDED VERSION that uses if-else statements
    //let uniqueItem = undefined;
    // if ((arr[0] == arr[1]) || (arr[0] == arr[2])) { //if first item matches second or third item, filter entire array against first item
    //     console.log("first NOT unique");
    //     uniqueItem = arr.filter((elem, i, arr) => elem != arr[0])[0];
    // } else { //if first item doesn't match second or third item, first item is the unique one!
    //     console.log("first is unique");
    //     uniqueItem = arr[0];
    // }
    // return uniqueItem;
}

//ALTERNATIVE SOLUTION FROM OTHER USER
// function findUniq(arr) {
//     arr.sort((a, b) => a - b); //sorts all elements in numerical order
//
//     return arr[0] == arr[1] ? arr.pop() // if the first two elements match, the last one is unique!
//        : arr[0] //if the first two elements don't match, the first one is unique!
// }

//ALTERNATIVE SOLUTION FROM OTHER USER
// function findUniq(arr) {
//     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n)); //find the element that has only one index number
// }

// ---------
let testArr1 = [1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1];
let testArr2 = [1, 1, 1, 1, 0.268, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let testArr3 = [6, 5, 5, 5, 5, 5, 5, 5, 5];
let testArr4 = [4, 2, 4, 4, 4, 4];
let testArr5 = [0.88, 0.88, 0.1, 0.88, 0.88];

console.log(findUniq(testArr3));