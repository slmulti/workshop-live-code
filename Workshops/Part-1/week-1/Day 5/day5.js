let myOuterVariable = 'dog';


function myFunction(myParam) {
  console.log('My Parameter before: ' + myParam);
  myParam = 'cat';
  console.log('My Parameter after: ' + myParam);
}

myFunction(myOuterVariable);

console.log(myOuterVariable);





