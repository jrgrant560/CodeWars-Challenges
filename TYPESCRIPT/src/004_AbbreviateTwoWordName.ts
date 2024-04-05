//Completion Time: ~8 mins

//BREAKDOWN: see comments

export function abbrevName(name: string): string {


    let nameArr = name.split(" "); //separate via the space

    //pull first letter of each word, make Uppercase
    let firstInit = nameArr[0].substring(0, 1).toUpperCase();
    let lastInit = nameArr[1].substring(0, 1).toUpperCase();

    //return with period in between
    return firstInit + "." + lastInit;
}


// CW top solution:
//return name
    // .split(" ") //separate via the space
    // .map((item) => item[0] //for each item in the new split array...
        // .toUpperCase()) // make uppercase
        // .join('.') //join with a period