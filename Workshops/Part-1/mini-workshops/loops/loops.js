function wordKebob(word) {
  let stringBuilder = '';
  for (let i = 0; i < word.length; i++) {
    stringBuilder += word[i] + '-';
  }
  return stringBuilder.slice(0,-1);
}

function wordKebob(word) {
    let stringBuilder = '';
    for (let i = 0; i < word.length-1; i++) {
      stringBuilder += word[i] + '-';
    }

    return stringBuilder.length -1
  }




// Define a function, betterGrade , that takes a string grade and a number pluses and returns grade concatenated
//  with as many plus (+) signs as the value of the number.

function betterGrade (grade = "", pluses = 0) {
    let stringBuilder = ''
    while (pluses>=1) {
        console.log(pluses)
        stringBuilder += '+'
        pluses--

    }
    return grade + stringBuilder
}

console.log(betterGrade('A', 4))

