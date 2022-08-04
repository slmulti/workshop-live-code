// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!',
// if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//eg   ['good', 'good', 'good', 'bad', good]  would return the string 'I smell a series!' as there are more than 2 'good' values

let testArray1 = ['good', 'good', 'good', 'bad', 'good'];
let testArray2 = ['good', 'good', 'bad', 'bad', 'bad'];
let testArray3 = ['bad', 'bad', 'bad', 'bad', 'bad'];

  

function goodIdeas (arr) {

    let count = 0

    for(let i = 0; i<arr.length; i++){
        if(arr[i]==='good'){
            count++
        }
    }
    if(count===0) return "Fail!"
    if(count>2) return "I Smell a Series!!!"
    return "Publish!"
}

console.log(goodIdeas(testArray1))
console.log(goodIdeas(testArray2))
console.log(goodIdeas(testArray3))

//===================================================================================

// function goodIdeas (arr) {

//     let count = 0

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]==='good'){
//             count++
//         }

//     }
//     if(count===0){
//         return "Fail!"
//     }else if(count>2){
//         return "I Smell a Series!!!"
//     } else return "Publish!"
// }

// console.log(goodIdeas(testArray1))
// console.log(goodIdeas(testArray2))
// console.log(goodIdeas(testArray3))

//===================================================================================

// let goodCount = 0
// let badCount = 0

// function checkArray(arr){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == "good"){
//             goodCount++
//         } else 
//             badCount++
//     }
//     if (goodCount === 0) return "Fail"
//     if (goodCount === 1 || goodCount === 2){
//         return "Publish"
//     } else if (goodCount > 2){
//         return "I smell a series"
//     }
// }

// // console.log(checkArray(["good", "good", "good", "good", "bad", "good"]))
// // console.log(checkArray(["good", "good", "bad", "bad", "bad", "bad"]))
// console.log(checkArray(["bad", "bad", "bad", "bad", "bad", "bad"]))
// console.log(goodCount)
// console.log(badCount)