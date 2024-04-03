function processData(name, age, isStudent, hobbies) {
    console.log("Name: ".concat(name));
    console.log("Age: ".concat(age));
    console.log("Is Student: ".concat(isStudent));
    console.log("Hobbies: ".concat(hobbies.join(', ')));
}
// const theName = 'John Doe';
// const age = 25;
// const isStudent = true;
// const hobbies = ['reading', 'coding', 'gaming'];
var theName = 'John Doe';
var age = 25;
var isStudent = true;
var hobbies = ['reading', 'coding', 'gaming'];
processData(theName, age, isStudent, hobbies);
