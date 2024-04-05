"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hobbies = exports.isStudent = exports.age = exports.theName = exports.processData = void 0;
function processData(name, age, isStudent, hobbies) {
    console.log("Name: ".concat(name));
    console.log("Age: ".concat(age));
    console.log("Is Student: ".concat(isStudent));
    console.log("Hobbies: ".concat(hobbies.join(', ')));
}
exports.processData = processData;
// this also works, because TypeScript is smart enough to infer the types, but it's usually better to be explicit
// const theName = 'John Doe';
// const age = 25;
// const isStudent = true;
// const hobbies = ['reading', 'coding', 'gaming'];
exports.theName = 'John Doe';
exports.age = 25;
exports.isStudent = true;
exports.hobbies = ['reading', 'coding', 'gaming'];
