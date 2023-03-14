//Completion Time: 34 + 4:21 + 17
//BREAKDOWN:

//
function mix(s1, s2) {
    //sorts an object by its keys
    function sortObjByKeys(obj) {
        return Object.fromEntries(Object.entries(obj).sort());
    }

    //sorts an object by its keys reversed
    function sortObjByKeysReverse(obj) {
        return Object.fromEntries(Object.entries(obj).sort().reverse());
    }

    //sorts an object by its values
    function sortObjByValues(obj) {
        return Object.fromEntries(Object.entries(obj).sort((a, b) => b[1] - a[1]));
    }

    let s1CharCounts = s1.match(/[a-z]/g).reduce((count, item) => {
        return count[item] = count[item] + 1 || //increment the count if it exists, ELSE
            1, count //initialize the count at 1
    }, {});
    //console.log(s1CharCounts);

    //object containing all lowercase characters, with their counts
    let s2CharCounts = s2.match(/[a-z]/g).reduce((count, item) => {
        return count[item] = count[item] + 1 || //increment the count if it exists, ELSE
            1, count //initialize the count at 1
    }, {});
    //console.log(s2CharCounts);

    function returnGreaterStringObj(prop, numA,numB) {
        let resultObj = {};
        if (numA == numB && numA > 1) {
            resultObj[(10000 - numA) + "E" + prop] = ("=:" + prop.repeat(numA));
        } else if ((numA > numB || numB == undefined) && numA > 1) {
            resultObj[(10000 - numA) + "A" + prop ] = ("1:" + prop.repeat(numA));
        } else if ((numB > numA || numA == undefined) && numB > 1) {
            resultObj[(10000 - numB) + "B" + prop ] = ("2:" + prop.repeat(numB));
        }
        //console.log(resultObj);
        return resultObj;
    }

    let mergedCharCounts = sortObjByValues(sortObjByKeys({...s1CharCounts, ...s2CharCounts})); //object containing all characters with s2's counts, sorted alphabetically, then by count
    console.log(mergedCharCounts);
    
    let resultObj = {};

    for (const property in mergedCharCounts) {
        //if (mergedCharCounts[property] > 1) {
            let greaterStringObj = returnGreaterStringObj( property, s1CharCounts[property], s2CharCounts[property] )
            Object.assign(resultObj, greaterStringObj);
        //}
    }

    // let totalCharCounts = s1.concat('', s2).match(/[a-z]/g).reduce((count, item) => {
    //     return count[item] = count[item] + 1 || //increment the count if it exists, ELSE
    //         1, count //initialize the count at 1
    // }, {});
    //console.log(totalCharCounts);

    //let totalCharCountsSortedKeys = sortObjByKeys(totalCharCounts); // totalCharCounts object sorted by keys (alphabetically)

    //let totalCharCountsSorted = sortObjByValues(totalCharCountsSortedKeys); // totalCharCounts object sorted by values, after being sorted by keys


    

    // for (const property in s1CharCounts) {
    //     if (s1CharCounts[property] > 1 && (s1CharCounts[property] > s2CharCounts[property] || s2CharCounts[property] == undefined)) {
    //         resultArray.push('1:' + property.repeat(s1CharCounts[property]));
    //     } else if (s2CharCounts[property] > s1CharCounts[property] && s2CharCounts[property] != undefined) {
    //         resultArray.push('2:' + property.repeat(s2CharCounts[property]));
    //     } else if (s1CharCounts[property] == s2CharCounts[property]) {
    //         resultArray.push('=:' + property.repeat(s1CharCounts[property]));
    //     }
    // }

    // for (const property in totalCharCountsSorted) {
    //     if (s1CharCounts[property] >= Math.round(totalCharCountsSorted[property] / 2)) {
    //         resultArray.push('1:' + property.repeat(s1CharCounts[property]));
    //     } else if (s2CharCounts[property] >= Math.round(totalCharCountsSorted[property] / 2)) {
    //         resultArray.push('2:' + property.repeat(s2CharCounts[property]));
    //     } else if (s1CharCounts[property] == s2CharCounts[property]) {
    //         resultArray.push('=:' + property.repeat(s1CharCounts[property]));
    //     }
    // }

    // for (const property in totalCharCountsSorted) {

    //     if (s1CharCounts[property] == s2CharCounts[property]) {
    //         resultArray.push('=:' + property.repeat(s1CharCounts[property]));
    //     } else if (s1CharCounts[property] > s2CharCounts[property] || s2CharCounts[property] == undefined) {
    //         resultArray.push('1:' + property.repeat(s1CharCounts[property]));
    //     } else if (s2CharCounts[property] > s1CharCounts[property] || s1CharCounts[property] == undefined) {
    //         resultArray.push('2:' + property.repeat(s2CharCounts[property]));
    //     }
    // }


    //console.log(resultObj);
    console.log(sortObjByKeys(resultObj));
    return Object.values(sortObjByKeys(resultObj)).join('/');
}


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