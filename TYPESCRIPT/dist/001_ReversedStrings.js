"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(str) {
    var reversedSTR = "";
    for (var i = (str.length - 1); i > -1; i--) {
        reversedSTR += str[i];
    }
    return reversedSTR; // reverse this!
}
exports.solution = solution;
