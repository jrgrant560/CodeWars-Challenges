//CHALLENGE SOURCE: https://www.codewars.com/kata/63cbe409959401003e09978b?fbclid=IwAR2VQXkNiTBIT0rlhbr2LOgDp7qVvbvfqsmwvaLpT3EAV3qf7kmvHTuyzHc

let testArray = [2, 4, 4, 6, 2, 1, 1, 5, 6, 7, 8, 8, 8, 8, 9,0,1,1,5,4,4];

//processes the array for sequences, then returns a new array that has been reducedto its sequence counts only
function arraySequenceCheck(targetArray, sequencingArray) {
    
    //if there are still numbers in the original array
    if (targetArray.length != 0) {
        //starting count
        let count = 1;
        //while the array's first item is equal to the second item, increase the 'count' and remove the first item
        while (targetArray[0] == targetArray[0 + 1]) {
            //increases the count
            count += 1;
            //remove the first item from the array
            targetArray.shift();
        }
        //remove the first item from the array (the last of any sequence that was just being counted)
        targetArray.shift();
        //add 'count' number to the end of the sequencingArray
        sequencingArray.push(count);
        //reset count to 1;
        count = 1;

        //RECURSE
        arraySequenceCheck(targetArray, sequencingArray);
    }

    //the sequencingArray replaced the original array
    return sequencingArray;
}

function setReduce(array) {

    //console.log('START: array is currently ' + array);
    //let consoleCheck = 0;

    // while array only has more than one item
    while (array.length > 1) {

        //secondary array that will accumulate the 'count' integers, resets after every check
        let sequenceArray = [];

        array = arraySequenceCheck(array, sequenceArray);

        //consoleCheck++;
        //console.log('Iteration #' + consoleCheck + ': array is now ' + array)
    }

    //the remaining integer is identified!
    let finalInt = array[0];
    console.log('Final Integer from this array is: ' + finalInt);
}

setReduce(testArray);