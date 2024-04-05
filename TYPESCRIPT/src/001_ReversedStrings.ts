//Completion Time: ~9 mins including research

//BREAKDOWN: see comments

export function solution(str: string): string {
    let reversedSTR = ""; // new blank string variable
    for (let i = (str.length - 1); i > -1; i--) { //loop that runs through the length of the string in reverse
        reversedSTR += str[i]; //appends each character to reversedSTR, starting from the end of the string
    }

    return reversedSTR;
}

//CW top solution:
//export function solution(str: string): string {


//     return str
//         .split("") //splits the string into individual characters
//         .reverse() // reverses the array of characters
//         .join(""); // concatenates the characters in their new order
// }