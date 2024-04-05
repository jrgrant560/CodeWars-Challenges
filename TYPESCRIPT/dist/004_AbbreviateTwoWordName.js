"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abbrevName = void 0;
function abbrevName(name) {
    //separate via the space
    var nameArr = name.split(" ");
    //pull first letter of each word
    var firstInit = nameArr[0].substring(0, 1) + ".";
    var lastInit = nameArr[1].substring(0, 1) + ".";
    // toUppercase
    return firstInit + lastInit;
}
exports.abbrevName = abbrevName;
