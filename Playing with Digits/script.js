//SOURCE: https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
//Completion Time: 

//does (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k?
function digPow(n, p){

    let digArray = (""+n).split("").map(x => { return parseInt(x); }); //splits n into an array of its digits
    let digPowArray = []; //empty array to contain converted integers after squaring formula
    let digPowSum = 0; //integer to contain sum of digPowArray
    let k = -1; //default value for k; will be changed if following operations succeed

    for (let i = 0; i < digArray.length; i++) { //loops through the digArray and adds the converted integers to "digPowArray"
        digPowArray.push(Math.pow(digArray[i], (p+i))); // runs the squaring formula on integer and adds it to "digPowArray"
    }

    for (let i = 0; i < digPowArray.length; i++) { //adds all integers in digPowArray
        digPowSum += digPowArray[i];
    }

    let intMultiple = 0;

    for (let i = 1; intMultiple < digPowSum; i++) { //multiplies n * ascending integers until exceeding digPowSum; if matches digPowSum, k is reassigned to i
        intMultiple = n * i;
        if (intMultiple == digPowSum) {
            k = i;
        };
    }
   
    return k;
}



//----------
let n1 = 695;
let p1 = 2;

//var digits = (""+n1).split("").map(x => { return parseInt(x); });
//console.log(digits);

console.log(digPow(n1, p1));