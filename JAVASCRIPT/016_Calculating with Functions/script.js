//Completion Time: ~ 2:15
//BREAKDOWN: int(calculation( int() ) );
// ) for int functions, allow overloading functions using ...args parameter
// ) calc functions use two parameters which are both numbers; the left operand is the outer function; the right operand is the inner function
// ) division returns whole integers with parseInt()


//perform calculations using functions instead of direct math in Javascript

//returns a calculation if a calculation function and second integer; otherwise, returns the calling integer by itself
function intCalc(..._args) {
    let result = myInt = arguments[0];

    if (arguments[1] != undefined) { //if there is a calc function and second integer given...
        let calc = arguments[1][0]; //calc function to read
        let intB = arguments[1][1]; //integer to calculate with calling integer
        switch (calc) { //performs specified calculation based on result of calc function
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

//integer functions calls intCalc, using their specific number
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

//calculation functions to be use in switch statement
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


//ALTERNATIVE FROM OTHER USER:
// Ugh, look how small it is!
// function zero(fn) { //fn is a function returned from the calc function (i.e. function (v) { return v + n })
//     return fn ? fn(0) : 0 //if there is a function (fn) given, return fn(0); if not, then return only 0
// }
// function one(fn) { return fn ? fn(1) : 1 }
// function two(fn) { return fn ? fn(2) : 2 }
// function three(fn) { return fn ? fn(3) : 3 }
// function four(fn) { return fn ? fn(4) : 4 }
// function five(fn) { return fn ? fn(5) : 5 }
// function six(fn) { return fn ? fn(6) : 6 }
// function seven(fn) { return fn ? fn(7) : 7 }
// function eight(fn) { return fn ? fn(8) : 8 }
// function nine(fn) { return fn ? fn(9) : 9 }

// function plus(n) {  //inserts n from the function that it calls
//     return function (v) { return v + n } //sends this function, which needs a parameter, to the calling function to process
// } 
// function minus(n) { return function (v) { return v - n } }
// function times(n) { return function (v) { return v * n } }
// function dividedBy(n) { return function (v) { return v / n } }


//ALTERNATIVE FROM OTHER USER:
// Ugh, look how small it is!
// const zero = a => a ? a(0) : 0
// const one = a => a ? a(1) : 1
// const two = a => a ? a(2) : 2
// const three = a => a ? a(3) : 3
// const four = a => a ? a(4) : 4
// const five = a => a ? a(5) : 5
// const six = a => a ? a(6) : 6
// const seven = a => a ? a(7) : 7
// const eight = a => a ? a(8) : 8
// const nine = a => a ? a(9) : 9

// const plus = a => b => a + b
// const minus = a => b => b - a
// const dividedBy = a => b => Math.floor(b / a)
// const times = a => b => a * b


// ---------
//console.log( seven(times(five())) ); // must return 35
//console.log( four(plus(nine())) ); // must return 13
//console.log( eight(minus(three())) ); // must return 5
//console.log( six(dividedBy(two())) ); // must return 3

console.log(seven(times(three())));