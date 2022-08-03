// let string1 = 'my string';

// let myArray = ['value1', 'value2', 'value3'];

// let myObject = {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   key4: 'value4',
// };

class ObjectBuilder {
  constructor(value1) {
    this.myValue1 = value1;
    this.myBoolean = false;
  }
  myMethod() {
    return 'I work!';
  }
  static myClassProperty = 'I am only for the class!';
}

let myNewObject1 = new ObjectBuilder('firstValue');
let myNewObject2 = new ObjectBuilder('firstValue');

console.log(ObjectBuilder.myClassProperty);
