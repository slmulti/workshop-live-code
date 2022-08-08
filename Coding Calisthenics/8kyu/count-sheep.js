// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Found here: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// Can run your function against tests:  Remember that it expects your function to be called countSheep

function sheepCounter(n){

    let string = ""

    for(let i=1;i<=n;i++){
        string += i + " sheep..."
    }
    return string
}

console.log(sheepCounter(5))

//==========================================================================================

function sheepCounter2(num){

    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
    }


console.log(sheepCounter2(10))

