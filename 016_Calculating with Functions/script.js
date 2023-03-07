//Completion Time: ~ 2:15
//BREAKDOWN: int(calculation( int() ) );
// ) for int functions, allow overloading functions using ...args parameter
// ) calc functions use two parameters which are both numbers; the left operand is the outer function; the right operand is the inner function
// ) division returns whole integers with parseInt()

//DONE; refactor, add comments, rewrite breakdown

//perform calculations using functions
function zero() {
    let myInt = 0;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function one() {
    let myInt = 1;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function two() {
    let myInt = 2;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function three() {
    let myInt = 3;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function four() {
    let myInt = 4;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function five() {
    let myInt = 5;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function six() {
    let myInt = 6;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function seven() {
    let myInt = 7;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function eight() {
    let myInt = 8;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}
function nine() {
    let myInt = 9;
    let result = myInt;
    if (arguments.length == 1) { //if there is a calc function parameter...
        result = calcInt(arguments[0][0], myInt, arguments[0][1]);
    }
    return result;
}

function plus(int) {
    return ["add", int]
}
function minus(int) {
    return ["subtract", int]
}
function times(int) {
    return ["multiply", int]
}
function dividedBy(int) {
    return ["divide", int]
}

function calcInt(calc, intA, intB) {
    let calcResult = 0;
    switch (calc) {
        case "add":
            calcResult = intA + intB;
            break;
        case "subtract":
            calcResult = intA - intB;
            break;
        case "multiply":
            calcResult = intA * intB;
            break;
        case "divide":
            calcResult = parseInt(intA / intB);
            break;
        default:
            calcResult = "invalid calculation requested";
    }
    return calcResult;
}

// function int() {
//     let myInt = 3;
//     let result = myInt;
//     if (arguments.length == 1) { //if there is a calc function parameter...
//         result = calcInt(arguments[0][0], myInt, arguments[0][1]);
//     }
//     return result;
// };

// ---------
//console.log( seven(times(five())) ); // must return 35
//console.log( four(plus(nine())) ); // must return 13
//console.log( eight(minus(three())) ); // must return 5
//console.log( six(dividedBy(two())) ); // must return 3

console.log(one(dividedBy(eight())));