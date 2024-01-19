//1 - RETURN NEGATIVE

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


// let num = 4

// function makeNegative(num) {
//     if ((num < 0) ) {
//         console.log(`${num} is already negative!`)
//     } else {
//         console.log(`${num} is not a negative number, but through Javascript sorcery, it is now: ${num * -1}.`)
//     }
// }
// makeNegative(num)


//2 - SUM OF POSITIVE

//You get an array of numbers, return the sum of all of the positives ones.


function positiveSum(arr){
    let sum = 0
 
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) sum += arr[i];
    }
    return sum
}
console.log(positiveSum([1,-2,3,4,5]))

// let arr = [-1, 2, 3, 4, -5]

// function positiveSum(arr) {
//     return arr.filter(number => number > 0).reduce((total, currentValue) => {
//         return total + currentValue;
// }, 0)
// }

// positiveSum(arr)

// const arr = [1,-2,3,4,-5,6]

// function positiveSum(arr) {
//     return arr.filter(number => number >0).reduce((total, currentValue) => {
//         return total + currentValue;
// }, 0)
// }
// positiveSum(arr)


// function positiveSum(numbers) {
//     return numbers.filter(number => number > 0).reduce((accumulator,value) => {
//         return accumulator + value;
// }, 0)
// }

// console.log(positiveSum)



// const words = ['the', 'world', 'is', 'round', 'like', 'an', 'orange']

// const shortWords = words.filter((word) => { 
//     return word.length <= 3 
//   })

// console.log(shortWords)