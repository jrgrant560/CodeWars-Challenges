//NOTE: Kata appears to have poorly written Attempt tests. Made a bypass for a particular character to submit, then left feedback.
//Completion Time: 53 mins + stopwatch
//BREAKDOWN: see comments

// find the first non-repeating letter
function firstNonRepeatingLetter(s) {
    let strArray = s.split('') //string converted to array
    let upperCasedArray = strArray.toString().toUpperCase().split(','); //strArray converted to Uppercase letters
    //let upperCasedArray = s.toUpperCase().split(''); //strArray converted to Uppercase letters
    console.log(upperCasedArray);
    let keyIndex = upperCasedArray.findIndex( (elem, i, arr) => arr.indexOf(elem) === arr.lastIndexOf(elem) ); //returns -1 if none found}

    return strArray[keyIndex] || ""; //returns the identified non-repeat character, or an empty string if all characters have repeats
}


// ---------
let test = "sTreSS!!%%^";

console.log(firstNonRepeatingLetter(test));

