/* ===============================================
 ================== Functions   ==================
==================================================*/
{
  // 1 - Declare and Invoke
  {
    // function newFunction() {
    //   console.log('hello');
    // }
    //Writing a Simple Function
    //Invoking a simple function
    // newFunction();
    // newFunction(
  }

  // 2 - Parameters and Arguments
  {
    //Writing a Function with Parameters
    // function sample(myValue) {
    //   console.log(myValue);
    // }
    //Invoking a Function with Arguments:
    //Argument 1:
    // sample(12);
    //Argument 2:
    // sample('taco');
    //Argument 3:
    // sample(14 + 20);
  }
  // 3 - Returning a value
  {
    //Writing and Invoking a Function with "console.log()"
    //Value will show up on the console
    //Writing and Invoking a Function with Keyword "return"
    //Value stored as a reference to the function. Will not show up on console
    /* **** Use the return values of functions **** */
    //Write the function with return value

    //Use the return value reference of the function
    //1. Logging the return value reference to the console.

    function doubler(value) {
      return value * 2;
    }
    // console.log('I think ' + doubler('Top Gun') + ' is a great movie!');

    //2. As a value for a variable and with concatenated String
    //2a. Log stored function reference to the console

    console.log(doubler);

    let x = doubler;
    console.log(x(10));
  }
}

/*===============================================
================== Debugging ====================
=================================================*/
{
  /* **** Recognize Errors and Debug your code **** */

  /* **Incorrect Variable Syntax Error Examples and Resolutions** */
  {
    //Syntax Error 1: Misspelled Keyword for Declaring a Variable
    //le name = "Multiverse";

    // Syntax Error 1 Resolution:

    let name = 'Your Name';

    //Syntax Error 2: Incorrect Assignment Operator
    // let bootcamp -> "Multiverse";

    //Syntax Error 2: Resolution
    let concept = 'Functions and Debugging';

    //Syntax Error 3: Incorrect use of the String Data Type
    // let progLanguage = "Multiverse;

    //Syntax Error 3: Resolution
    let progLanguage = 'Multiverse';

    //Syntax Error 4: Incorrect use of the Boolean Data Type
    //let isBootcamp = True;

    //Syntax Error 4: Resolution
    let isBootcamp = true;
  }

  /* **Reference Error Examples and Resolutions** */

  {
    //Reference Error 1: Variable Doesn't Exist never Initialized
    //console.log(someVariable)

    //Reference Error 2: Calling a Misspelled Variable Name
    //Step 1: Init a Variable
    let num = 9;
    //Step 2: Refer to variable name spelled incorrectly
    //console.log(nums)
  }
  /* **Type Error Examples and Resolutions** */

  // Type Error 1: Trying to change the value of a Constant Variable
  {
    //Step 1: Initialize a Constant
    // const number = 10;
    //Step 2: Try to re-assign the value of the constant
    // number = 12;

    //Type Error 2: Applying a method of one data type to another data type
    //Trying to apply the .length method to a number
    //Step 1: Init a number variable
    let nums = 90;
    //Step 2: Apply the .length() method to that variable
    nums.length();
  }
}
