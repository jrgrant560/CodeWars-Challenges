//Completion Time:
//BREAKDOWN: 47
// ) if array2 length == array1 length && array2 nesting == array1 nesting, return true


//check if the second array has the same length and nesting structure as the first array
Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.
    

    const obj = [ [ [ 55] ] ];
    //if array2 length == array1 length && array2 nesting == array1 nesting, return true
    const val = obj?.[0]?.[0]?.[0]?.[0]?.[0]?.[0] //optional chaining for array; can use a for loop
    return val;
    //STEP 1: need to make a recursive function that will loop through all elements in an array, and recurse on every element that has nested values; returns the length of each nest
    //STEP 2: check that the array1 length-nest check matches the array 2 length-nest check


    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
};


// ---------

// should return true
console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ) );
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ) );
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ) );

// should return false 
//console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ) );
//console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ) );
//console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ) );