//Completion Time: ~ 2:15
//BREAKDOWN: int(calculation( int() ) );
// ) for int functions, allow overloading functions using ...args parameter
// ) calc functions use two parameters which are both numbers; the left operand is the outer function; the right operand is the inner function
// ) division returns whole integers with parseInt()

//DONE; refactor, add comments, rewrite breakdown

//perform calculations using functions
function intCalc(..._args) {
    let result = myInt = arguments[0];
    if (arguments[1] != undefined) { //if there is a calc function parameter given...
        let calc = arguments[1][0];
        let intB = arguments[1][1];
        switch (calc) {
            case "add":
                result = myInt + intB;
                break;
            case "subtract":
                result = myInt - intB;
                break;
            case "multiply":
                result = myInt * intB;
                break;
            case "divide":
                result = parseInt(myInt / intB);
                break;
            default:
                result = "invalid calculation requested";
        }
    }
    return result;
}

function zero() { return intCalc(0, arguments[0]) };
function one() { return intCalc(1, arguments[0]) };
function two() { return intCalc(2, arguments[0]) };
function three() { return intCalc(3, arguments[0]) };
function four() { return intCalc(4, arguments[0]) };
function five() { return intCalc(5, arguments[0]) };
function six() { return intCalc(6, arguments[0]) };
function seven() { return intCalc(7, arguments[0]) };
function eight() { return intCalc(8, arguments[0]) };
function nine() { return intCalc(9, arguments[0]) };
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


// ---------
//console.log( seven(times(five())) ); // must return 35
//console.log( four(plus(nine())) ); // must return 13
//console.log( eight(minus(three())) ); // must return 5
//console.log( six(dividedBy(two())) ); // must return 3

console.log(seven(times(two())));