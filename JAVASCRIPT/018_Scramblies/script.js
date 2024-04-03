//Completion Time: ~2:08
//BREAKDOWN:
// ) if str2 can be created by taking letters from str1, return true
//   ) create an array of str2 and an array of str1, then use reduce() to convert it into an object that lists a count for each character
//   ) check that every property in str2 count object is not greater than the same property in str1 count object
//     ) if a property fails, return false; otherwise let the for loop continue
//       ) if the for loop never returns false, return true at the end of the function

//returns true if a portion of str1 can be rearranged to match str2
function scramble(str1, str2) {

    //an object that lists the number of iterations for each value in str1
    let str1CharCounts = str1.split('').reduce((count, item) => {
        return count[item] = count[item] + 1 || //increment the count if it exists, ELSE
            1, count //initialize the count at 1
    }, {}); //add to an empty object

    //an object that lists the number of iterations for each value in str1
    let str2CharCounts = str2.split('').reduce((count, item) => {
        return count[item] = count[item] + 1 || //increment the count if it exists, ELSE
            1, count //initialize the count at 1
    }, {}); //add to an empty object

    //check that every property in str2CharCounts is not greater than str1CharCounts[property]
    for (const property in str2CharCounts) { 
        if (str2CharCounts[property] > str1CharCounts[property] || str1CharCounts[property] == undefined) {
            return false
        }
    }
    return true;
}


// ---------
let testStr1 = "abcdefghijklmnopqrstuvwxyz".repeat(10_000);
let testStr2 = "zyxcba".repeat(9_000);

console.log(scramble(testStr1, testStr2));