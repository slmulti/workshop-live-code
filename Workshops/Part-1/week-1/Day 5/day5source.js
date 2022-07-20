// Have a better understanding of solving problems using Programming Fundamentals.
// Learn More by Doing More

/* **** Learn More by Doing More **** */

// Converting Function Declaration to Arrow Functions

// Function Declaration 1: Adding Values
function addSimple(num1, num2) {
  return num1 + num2;
}

// Arrow Function 1: Adding Values
let addArrow = (num1, num2) => {
  return num1 + num2;
};

console.log(addSimple(3, 4));
console.log(addArrow(3, 4));

// Function Declaration 2: Printing Message
function printCapsSimple(words) {
  return words.toUpperCase();
}

// Arrow Function 2: Printing Message
let printCapsArrow = (words) => {
  return words.toUpperCase();
};

console.log(printCapsSimple('Multiverse'));
console.log(printCapsArrow('Multiverse'));

// Function Declaration 3: Contains "app" in a word
function containsAppSimple(word) {
  return word.toLowerCase().includes('app');
}

// Arrow Function 3: Contains "app" in a word
let containsAppArrow = (word) => {
  return word.toLowerCase().includes('app');
};

console.log(containsAppSimple('Appetizer'));
console.log(containsAppArrow('Apple'));

/* Function Problem with 3+ Parameters */

// Function 1:
// Add the First 2 Values, Multiply the Third Value, Divide the Last Value

// Simple:
function allOpsSimple(num1, num2, num3, num4) {
  return ((num1 + num2) * num3) / num4;
}

// Arrow:
let allOpsArrow = (num1, num2, num3, num4) => {
  return ((num1 + num2) * num3) / num4;
};

console.log(allOpsSimple(1, 2, 3, 4));
console.log(allOpsArrow(1, 2, 3, 4));

// Function 2:
// Return true if the first number input and second number input added up equals the length of the third string input.

function addsUpToString(num1, num2, str1) {
  if (num1 + num2 == str1.length) {
    return true;
  } else {
    return false;
  }
}

console.log(addsUpToString(2, 4, 'Hello!'));
