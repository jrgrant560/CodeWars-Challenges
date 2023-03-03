//SOURCE: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
//Completion Time: ~30 mins

//BREAKDOWN: just google regex

//make sure pin code is exactly 4 digits or 6 digits
function validatePIN(pin) {
    return /^\d{4}$|^\d{6}$/.test(pin); //return boolean result of 'does pin contains only 4 or only 6 digits?'
}

let testcode0 = 1568;
let testcode1 = "1568";
let testcode2 = 15687897;
let testcode3 = '15a67';
let testcode4 = '15a67b';
let testcode5 = 156877;

console.log(validatePIN(testcode1));
//console.log(/^\d{4}$|^\d{6}$/.test(testcode5));