"use strict";
//Completion Time: 
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheeps = void 0;
//BREAKDOWN: see comments
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(function (item) { return (item == true); }).length;
}
exports.countSheeps = countSheeps;
// CW top solution:
//
