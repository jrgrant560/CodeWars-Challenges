//Completion Time: 5:12
//BREAKDOWN: 

// ) return a string that contains substrings of the largest count of each lowercase letter from two strings, ordered from largest to smallest
//   ) each substring is formatted: [=/1/2]:[char * letter]/
//   example: "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
//   1) [=/1/2] : the number of the string that contains the highest count of a character; OR an equals sign if they are even
//   2) [char * letter] : a substring of the 'count' number of a letter
//   ) do not include counts that aren't greater than 1
// NOTE: This challenge was missing or did not specify a rule to sort the result by order of prefix, taking me longer than it should have. I was pretty tired for most of it too.

//compare which of the two strings has the most lowercase characters, and return a specific result
function mix(s1, s2) {
    //sorts an object by its keys
    function sortObjByKeys(obj) {
        return Object.fromEntries(Object.entries(obj).sort());
    }

    //sorts an object by its values
    function sortObjByValues(obj) {
        return Object.fromEntries(Object.entries(obj).sort((a, b) => b[1] - a[1]));
    }

    //object containing all lowercase characters, with their counts
    let s1CharCounts = s1.match(/[a-z]/g).reduce((count, item) => {
        return count[item] = count[item] + 1 || //increment the count if it exists, ELSE
            1, count //initialize the count at 1
    }, {});

    //object containing all lowercase characters, with their counts
    let s2CharCounts = s2.match(/[a-z]/g).reduce((count, item) => {
        return count[item] = count[item] + 1 || //increment the count if it exists, ELSE
            1, count //initialize the count at 1
    }, {});

    let mergedCharCounts = sortObjByValues(sortObjByKeys({ ...s1CharCounts, ...s2CharCounts })); //object containing all characters with s2's counts, sorted alpha-numerically, then by count

    //returns the intended key:string pair, based on the comparison results between numA & numB
    //the key will be used to sort alpha-numerically
    function returnGreaterStringObj(prop, numA, numB) {
        let result = {};
        if (numA == numB && numA > 1) { //if numbers are equal, and greater than 1
            result[(100000 - numA) + "E" + prop] = ("=:" + prop.repeat(numA));
        } else if ((numA > numB || numB == undefined) && numA > 1) { //if (A > B, or B is not undefined), and A > 1
            result[(100000 - numA) + "A" + prop] = ("1:" + prop.repeat(numA));
        } else if ((numB > numA || numA == undefined) && numB > 1) { //if (B > A, or A is not undefined), and B > 1
            result[(100000 - numB) + "B" + prop] = ("2:" + prop.repeat(numB));
        }
        return result;
    }

    let resultObj = {};

    for (const property in mergedCharCounts) { //for every key: string pair in mergedCharCounts...
        let greaterStringObj = returnGreaterStringObj(property, s1CharCounts[property], s2CharCounts[property]) //object returned from returnGreaterStringObj
        Object.assign(resultObj, greaterStringObj); //append greaterStringObj into result Object; won't assign empty greaterStringObj's
    }

    return Object.values(sortObjByKeys(resultObj)).join('/');
}

//ALTERNATIVE FROM OTHER USER; there aren't any short solutions to this Kata, so I can cut myself some slack
// function mix(s1, s2) {
//     return alphabet
//         .map(char => {
//             const s1Count = s1.split('').filter(x => x === char).length,
//                 s2Count = s2.split('').filter(x => x === char).length,
//                 maxCount = Math.max(s1Count, s2Count);

//             return {
//                 char: char,
//                 count: maxCount,
//                 src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
//             };
//         })
//         .filter(c => c.count > 1)
//         .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
//         .map(c => `${c.src}:${c.char.repeat(c.count)}`)
//         .join('/');
// }

//ALTERNATIVE FROM OTHER USER; there aren't any short solutions to this Kata, so I can cut myself some slack
// function mix(s1, s2) {
//     var counter = s => s.replace(/[^a-z]/g, '').split('').sort().reduce((x, y) => (x[y] = 1 + (x[y] || 0), x), {});
//     s1 = counter(s1); s2 = counter(s2);
//     var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
//     keys.forEach(key => {
//         var c1 = s1[key] || 0, c2 = s2[key] || 0, count = Math.max(c1, c2);
//         if (count > 1) {
//             var from = [1, '=', 2][Math.sign(c2 - c1) + 1];
//             var str = [...Array(count)].map(_ => key).join('');
//             res.push(from + ':' + str);
//         }
//     });
//     return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
// }

// ---------
let testStrA = "Are the kids at home? aaaaa fffff";
let testStrB = "Yes they are here! aaaaa fffff";
//"=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
let testStrC = "aaaaa z bbbbbb ffff eee gggg rr oo t cc rc y";
let testStrD = "gggg aaaaa m bbbbb fffff ddd z rr cc rc yyyy";

let testStrE = "looping is fun but dangerous";
let testStrF = "less dangerous than coding";
//'1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg'

console.log(mix(testStrC, testStrD));