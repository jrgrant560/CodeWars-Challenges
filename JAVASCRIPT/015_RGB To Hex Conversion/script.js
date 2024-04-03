//Completion Time: 1:40
//BREAKDOWN: see comments

// convert three rgb values to a string of their hexadecimal equivalent
function rgb(r, g, b) {
    let rgbArrayRounded = [r, g, b].map(elem => { //rounds any values that are outside the 0-255 range
        return elem < 0 ? elem = 0 // if elem is less than 0, then convert to 0
            : elem > 255 ? elem = 255 // if elem is greater than 255, then convert to 255
                : elem
    });

    let rgb16BaseArray = rgbArrayRounded.map(elem => //converts all values to their hexadecimal equivalent (uppercase)
        elem.toString(16).toUpperCase()
    );

    let rgbHexedArray = rgb16BaseArray.map(elem => // appends '0' before values that are 0-f
        (/^([A-Z]|\d)$/).test(elem) ? elem = '0' + elem
            : elem
    );

    return rgbHexedArray.join('');
}


//ALTERNATIVE SOLUTION FROM OTHER USER
// function rgb(r, g, b){
// 	return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }

//ALTERNATIVE SOLUTION FROM OTHER USER
// function rgb(r, g, b){
//     return [r,g,b].map(function(x) {
//       return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
//     }).join('').toUpperCase();
//   }

// ---------
let test1 = [255, 255, 255]; // returns FFFFFF
let test2 = [255, 255, 300]; // returns FFFFFF
let test3 = [0, 0, 0]; // returns 000000
let test4 = [148, 3, 211]; // returns 9400D3
let test5 = [0, 0, -20]; // returns 000000
let test6 = [152, 12, 26];

function testRGB(arr) {
    console.log(rgb(arr[0], arr[1], arr[2]));
}

testRGB(test4);