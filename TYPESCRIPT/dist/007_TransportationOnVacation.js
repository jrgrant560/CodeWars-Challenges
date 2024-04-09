"use strict";
//Completion Time: 
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalCarCost = void 0;
//BREAKDOWN: 
function rentalCarCost(d) {
    // Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
    // Write a code that gives out the total amount for different days(d).
    return d > 6
        ? ((d * 40) - 50)
        : d > 2
            ? ((d * 40) - 20)
            : d * 40;
}
exports.rentalCarCost = rentalCarCost;
// CW top solution
