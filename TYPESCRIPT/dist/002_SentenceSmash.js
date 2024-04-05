"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smash = void 0;
function smash(words) {
    var myStr = "";
    for (var i = 0; i < words.length; i++) {
        myStr += words[i];
        if (i != words.length - 1) {
            myStr += ",";
        }
    }
    return myStr;
}
exports.smash = smash;
;
