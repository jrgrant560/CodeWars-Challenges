//SOURCE: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
//Completion Time: ~36 mins

//BREAKDOWN:
// ) if [], then "nobody likes this"
// ) if one name ["name"] then  "name likes this"
// )  if two names ["name1", "name2"] then  "name1 and name2 like this"
// ) if three names ["name1", "name2", "name3"], then "name1, name2, and name3 like this"
// ) if four or more names, then "name1, name2, and '2+' others like this"

//move all elements that equal 0 to the end of the array
function likes(names) {
    let response = ''; //empty response
    switch (names.length) { //return different string based on the length of the array
        case 0:
            response = 'no one likes this';
            break;
        case 1:
            response = names[0] + ' likes this';
            break;
        case 2:
            response = names[0] + ' and ' + names[1] + ' like this';
            break;
        case 3:
            response = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
            break;
        default:
            response = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
    return response;
}

//Alternative from other users that uses an object isntead:
// function likes(names) {
//     return {
//         0: 'no one likes this',
//         1: `${names[0]} likes this`,
//         2: `${names[0]} and ${names[1]} like this`,
//         3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//         4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//     } [Math.min(4, names.length)]
// }


// ---------
let testArr0 = [];
let testArr1 = ["Peter"];
let testArr2 = ["Jacob", "Alex"];
let testArr3 = ["Max", "John", "Mark"];
let testArr4 = ["Alex", "Jacob", "Mark", "Max"];
let testArr5 = ["Alex", "Jacob", "Mark", "Max", "Anderson", "Wilma", "Archibald", "Vanhelsing", "Marco Polo"];

console.log(likes(testArr3));