// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// let testBool = true;

function boolToWord(bool){
    if(bool==true){
        return "yes"
    } else return "no"
}

console.log(boolToWord(true))
console.log(boolToWord(false))

const boolToString = (b) => (b ? 'Yes' : 'No');

console.log("javascript ternary operator way: " + boolToString(true))
console.log("javascript ternary operator way: " + boolToString(false))
