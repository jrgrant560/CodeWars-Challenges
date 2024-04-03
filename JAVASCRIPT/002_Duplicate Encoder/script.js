//SOURCE: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
//Completion Time: ~4 hours? (across 3 sessions)

//converts any repeated letters to ')', and any non-repeated letters to '('
function duplicateEncode(word) {
    let wordArray = word.split(""); //the original string converted to an array
    let duplicateChars = []; //empty array to contain characters flagged as duplicates
    let newWordArray = []; //empty array to contain revised characters

    //checks if there is a duplicate of any character in the array, and adds it to the dulicateChars array if found
    function checkDuplicate(char, index, array) {
        arrayLower = array.map(item => item.toLowerCase()); //converts array to lowercase ketters
        //checks if duplicateChars doesn't have the current item; if not, it checks if this is the first time this item appears
        if (!duplicateChars.includes(char)) { //if duplicateChars array does not have any items that match the current char
            if (arrayLower.indexOf(char.toLowerCase()) !== index) { //if the first index of this character does not match the current index, push it to duplicateChars array
                duplicateChars.push(char.toLowerCase());
            }
        }
    };

    //filters for all duplicates and adds them to duplicateChars array (can return a new array with only duplicates if needed)
    wordArray.filter(checkDuplicate);

    // adds a replacement character to newWordArray depending on the results of the wordArray
    wordArray.forEach(
        (char) => {
            if (duplicateChars.includes(char.toLowerCase())) {
                newWordArray.push(')');
                //console.log(char + ' is repeated')
            } else {
                newWordArray.push('(');
                //console.log(char + ' is normal')
            }
        }
    );

    //combines the wordArray into a string
    let newWord = newWordArray.join('');
    return newWord;
};


//----------
let testWord = "xQmkPvQQQQQ";

console.log(duplicateEncode(testWord));