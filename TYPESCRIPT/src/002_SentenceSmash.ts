//Completion Time: ~9 mins

//BREAKDOWN: see comments

export function smash(words: string[]): string {

    let myStr = ""; // new blank string variable

    for (let i = 0; i < words.length; i++) { // ascending loop through the array
        myStr += words[i]; // appends each character to the end of the string
        if (i != words.length - 1) { // if the word is not the final item in the array...
            myStr += " "; //  append a space character
        }
    }

    return myStr;
};

// CW top solution:
//return words.join(' ') ; // concatenates the words with a space in between each item
