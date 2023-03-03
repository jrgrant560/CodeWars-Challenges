//SOURCE: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript


let testText = "please capitalize my 100 'first' letters.";


String.prototype.testString = function () {
    console.log(this.toString());
};

String.prototype.toJadenCase = function () {

    //converts the string to an array of each word
    let arrayofWords = this.toString().split(' ');

    // cycles through every word in the array and capitalizes each first letter
    for (wordIndex = 0; wordIndex < arrayofWords.length; wordIndex++) {

        //starting index position of the first character in the word
        let firstCharPos = 0;

        //word character index for alpha-character search
        let wordChar = 0;
        //finds the position of the first alpha-character in a word
        while (wordChar < arrayofWords[wordIndex].length && arrayofWords[wordIndex][wordChar].match(/[a-zA-Z]/) == null) {
            firstCharPos++;
            wordChar++
        }

        //only performs the capitalization if the word is alpha
        if (arrayofWords[wordIndex].match(/[a-zA-Z]/) != null) {
            //capitalizes the first letter of the word
            let capitalizedWord = arrayofWords[wordIndex].replace(arrayofWords[wordIndex][firstCharPos], arrayofWords[wordIndex][firstCharPos].toUpperCase());
            console.log(capitalizedWord);
            //replaces the word with the capitalized version
            arrayofWords[wordIndex] = capitalizedWord;
        }

    }

    //concatenates the new array of words
    let newString = arrayofWords.join(" ");

    return newString;
};

console.log(testText.toJadenCase());