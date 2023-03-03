//SOURCE: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
//Completion Time: ~45 mins

//checks if a word is an isogram (has no repeated letters) and returns false if not
function isIsogram(str) {
    let isogramBool = true; //boolean that will be returned at the end of the function; changes to false if it fails the isogram check

    if (str != undefined) {
        let wordLowerArray = str.toLowerCase().split(""); //converts word to lowercase letters, then to an array
        
        //checks if this is the first time this character has appeared; if not, changes isogramBool to false
        function checkDuplicateChars(char, index, array) {
            if (array.indexOf(char) !== index) { //if the first index of this character does not match the current index, changes isogramBool to false
                isogramBool = false;
            }
        };
        
        //filters for duplicates
        wordLowerArray.filter(checkDuplicateChars);
    }

    return isogramBool;
};


//----------
let testWord = "ma1n1";

console.log(isIsogram(testWord));