/* **** The JavaScript Primitive Data Types:  **** */

/* *Primitive Data Type 1: Strings* */

//Initializing an Empty String Variable
let str = ''; //With single quotes
let str2 = ''; //With double quotes

//Initializing a String Variable with Characters
let str3 = ' '; //With White Space Character
let str4 = '@#$%^'; //With Symbol Characters
let str5 = 'Multiverse'; //With Letter Characters
let str6 = '12387664'; //With Numeric Characters

//Initializing a String within a String
let str7 = "Shakespeare said 'To be, or Not to be. That is the Question.'"; //Single Quotes within Double Quotes

let str8 = 'Steve Jobs said "Everyone should learn to program computers. It teaches you how to think."'; //Single Quotes within Double Quotes

//Verify Type Using Type Of Method:
typeof str1;

/* Primitive Data Type 2: Number */

//Initializing Different Types of Numbers
let num1 = 9; // Positive Whole Number
let num2 = 99.9; //Positive Float (Decimal) Number
let num3 = -15; //Negative Whole Number
let num4 = -19.99; //Negative Float (Decimal) Number

//Verify Type Using Type Of Method:
typeof num3;

/* Primitive Data Type 3: Boolean */

//Initialize One of Two Values
let bool1 = true;
let bool2 = false;

//Verify Type Using Type Of Method:
typeof bool1;

/* Primitive Data Type 4: Undefined */

//Initializing an Undefined Variable (By Using no Value):
let undef1; //No value, will default to undefined
let undef2; // No value, will default to undefined

//Initializing an Undefined Variable (By Using Keyword):
let undef3 = undefined; //Undefined keyword makes this undefined type
let undef4 = undefined; //Undefined keyword makes this undefined type

//Verify Type Using Type Of Method:
typeof undef1;
typeof undef3;

/* Primitive Data Type 5: Null */

//Initialing a variable with Null (Using the Keyword)
let item1 = null; //Object with no Reference

//Verify Type Using Type Of Method:
typeof item1;

/* **** Use Comparison Operators to compare values  **** */

//Comparison Operator 1: Greater Than
let greaterThan1 = 9 > 2; //Results in True
let greaterThan2 = 23 > 43; //Results in False

//Comparison Operator 2: Less Than
let lessThan1 = 12 < 4; //Results in False
let lessThan2 = 8 < 10; //Results in True

//Comparison Operator 3: Loosely Equals
let looseEqual1 = 3 == '3'; //Results in True
let looseEqual2 = 8 == 4; //Results in False

//Comparison Operator 4: Strictly Equals
let strictEqual1 = 3 === '3'; //Results in False
let strictEqual2 = 8 === 8; //Results in True

//Comparison Operator 5: Greater than or Loosely Equal To
let gte1 = 9 >= '9'; //Results in True
let gte2 = 23 >= 15; //Results in True
let gte3 = 24 >= 31; //Results in False
let gte4 = 30 >= '90'; //results in False

//Comparison Operator 6: Less than or Loosely Equal To
let lte1 = 9 <= '9'; //Results in True
let lte2 = 8 <= 12; //Results in True
let lte3 = 7 <= '4'; //Results in False
let lte4 = 12 <= 9; //Results in False

/* **** Use Logical Operators to Evaluate Boolean Expressions  **** */

//Logical Operator 1: The AND Operator (&&)
let and1 = true && false; //Results in False
let and2 = true && true; //Resuts in True
let and3 = false && true; //Results in False
let and4 = false && false; //Results in False

//Logical Operator 2: The OR Operator (||)
let or1 = true || false; //Results in True
let or2 = true || true; //Results in True
let or3 = false || true; //Results in True
let or4 = false || false; //Results in False

//Logical Operator 3: The NOT Operator (!)
let not1 = !true; //Results in False
let not2 = !false; //Results in True

/* **** Apply Control Flow using If, Else If, and Else Statements  **** */

/*Control Flow with IF Statements*/

//If Statement 1: Using Variables, Numbers, and Comparison Operators
let num = 25;

if (num > 21) {
  console.log("Great, let's go to a bar!");
}

//If Statement 2: Using Variables, Strings, and Includes String Method
let word = 'Software Engineer';

if (word.includes('Software')) {
  console.log('I love Software! Software is Amazing!');
}

//If Statement 3: Using the Boolean Value true
if (true) {
  console.log('We are in the IF Block whenever an expression is true');
}

//If Statement 4: Using Logical Operator AND (&&)
let word2 = 'Learn Coding';

if (9 > 7 && word2.includes('Learn')) {
  console.log('Cool! We Passed the Logical Operator AND Expression to Be Here.');
}

//If Statement 5: Using Logical Operator OR (||)
let word3 = 'Listen to Music';

if (word3.includes('Music') || 9 < 8) {
  console.log('Cool! We passed the Logical Operator OR Expression to Be Here.');
}

//If Statement 6: Using Logical Operator NOT (!)
let word4 = "You can't see me";

if (!word4.includes('never')) {
  console.log("That word isn't in the String!");
}

/*Control Flow with IF and Else Statements*/

//If and Else Statement 1 Using Variables, Numbers, and Comparison Operators
let number = 25;

if (number > 21) {
  console.log("Great, let's go to a bar!");
} else {
  console.log("Let's not go to the bar");
}

//If and Else Statement 2: Using Variables, Strings, and Includes String Method
let words = 'Software Engineer';

if (words.includes('Software')) {
  console.log('I love Software! Software is Amazing!');
} else {
  console.log('I think you should consider Software Engineering.');
}

//If and Else Statement 3: Using the Boolean Value true
if (true) {
  console.log('We are in the IF Block whenever an expression is true');
} else {
  console.log('We are the ELSE block whenever the IF Block expression evaluates to False!');
}

/*Control Flow with IF, Else IF, Else Statements*/

//If Else IF Else Statement : Using Logical Operator AND (&&) and OR (||)
let words2 = 'Learn Coding';

if (9 > 7 && !words2.includes('Learn')) {
  console.log('Cool! We Passed the Logical Operator AND Expression to Be Here.');
} else if (true || false) {
  console.log(
    'Cool, we made it to the Else IF block because the first IF did not pass, but this one did before going to the Else'
  );
} else {
  console.log("If we are here, it's because nothing else passed. The IF or the Else IF");
}

//If, Else IF, and Else Statement 2: Using Variables, Numbers, and Comparison Operators
let number2 = 9;

if (number2 > 21) {
  console.log("Great, let's go to a bar!");
} else if (number2 > 1 && number2 < 13) {
  console.log("Let's go to the Arcade!");
} else {
  console.log("Let's go watch a Movie!");
}
