/**
 * Star pattern in javascript 
 * https://www.tutorialstonight.com/js/javascript-star-pattern
 * https://programmersportal.com/top-25-star-pattern-programs-in-javascript-with-examples/
 */

/** ***************************Pyramid Pattern****************************** */

let rows = 6;
let string = "";

// External loop
for (let i = 1; i <= rows; i++) {

    // printing spaces
    for (let j = 1; j <= rows - i; j++) {
        string += " ";
    }

    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
//console.log(string);

/** ***************************Reversr Pyramid Pattern****************************** */

let reverserRows = 6;
let reverseString = "";

// External loop
for (let i = 0; i < reverserRows; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        reverseString += " ";
    }
    // printing star
    for (let k = 0; k < 2 * (reverserRows - i) - 1; k++) {
        reverseString += "*";
    }
    reverseString += "\n";
}
// console.log(reverseString);

/** ***************************Diamond Star Pattern****************************** */
let diamondRows = 6;
let diamondString = "";

// Upper triangle shape
for (let i = 1; i <= diamondRows; i++) {
    // printing spaces
    for (let j = diamondRows; j > i; j--) {
        diamondString += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
        diamondString += "*";
    }
    diamondString += "\n";
}
// Lower triangle shape  
for (let i = 1; i <= diamondRows - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        diamondString += " ";
    }
    // printing star
    for (let k = (diamondRows - i) * 2 - 1; k > 0; k--) {
        diamondString += "*";
    }
    diamondString += "\n";
}
// console.log(diamondString);

/** *****************Hollow diamond pattern********************************* */
let hollowRows = 6;
let char = "";

// Upper triangle shape
for (let i = 1; i <= hollowRows; i++) {
    // printing spaces
    for (let j = hollowRows; j > i; j--) {
        char += " ";
    }
    // printing star
    for (let k = 0; k < i * 2 - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
            char += "*";
        }
        else {
            char += " ";
        }
    }
    char += "\n";
}

// Lower triangle shape  
for (let i = 1; i <= hollowRows - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        char += " ";
    }
    // printing star
    for (let k = (hollowRows - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (hollowRows - i) * 2 - 1) {
            char += "*";
        }
        else {
            char += " ";
        }
    }
    char += "\n";
}
console.log(char);