# Classes
### Our Object Builder!
In JavaScript, we will often utilise objects as a collection of related properties and methods.  Building upon this, we will find ourselves reusing the structure of these objects  as we build out our application.  

#### Don't repeat yourself
When programming, if we find ourselves reusing blocks of code (in this case, we are reusing the structure of an object) this is often an opportunity to create some functionality that reuses the code for us.

#### Introducing Classes
In short, classes represent a type of special function that specialises in the creation of objects that share a common structure or template.   As with other functions, classes allow us to reuse code throughout an application, which can, among other things, reduce the likelihood of introducing errors or bugs into our code.


### The Anatomy of Classes

**Declaration**
Much like functions have a declaration keyword of **function** we declare a class using the **class** keyword.  Also note that naming conventions for classes recommend the use of an identifier beginning with a capital letter.  (see PascalCase)

    class MyClass {        
    // note class declarations do not require parenthesis like a function,  
    but only the curly brackets designating the body of the class being  
    declared.
    }


**Constructor**
The constructor method is a special method associated with classes and is called when an object is being initialised from the Class.  (Note there can only be one constructor method in a class.  Also note that normal method syntax can be used; as an example, you can use default values: *param1 = 'default'*.

    class MyClass {        
        constructor(param1, param2) {
        this.param1 = param1
        this.param2 = param2
        this.param3 = 'I don't have to be passed as an argument'
        }

**Methods**
Methods can be assigned to the constructed object using the method shorthand sytanx as seen below.

    class MyClass {        
        constructor(param1, param2) {
        this.param1 = param1
        this.param2 = param2
        this.param3 = 'I don't have to be passed as an argument'
        }
        methodOne() {
	        return 'I am a value!'
        }


## Initialising an instance of a class  (Using your factory to build an object)
When we are ready to use our new Class to create an object, we can do so with the **new** operator, which will return a new object built from our Class template.  

    const myNewObject = new MyClass(arg1, arg2)

These objects are often referred to as an instance of the class.  We can check that our object is an instance of our class using the following:

    console.log(myNewObject instanceof MyClass)  //true
