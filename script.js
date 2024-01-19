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


// function positiveSum(arr){
//     let sum = 0
 
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] >= 0) sum += arr[i];
//     }
//     return sum
// }
// console.log(positiveSum([1,-2,3,4,5]))



//3 - SQUARING AN ARGUMENT

//Now you have to write a function that takes an argument and returns the square of it.


// function square(number) {
//     return number * number;
// }
//  console.log(square(5))




//4 - SUM ARRAYS

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// const numbers = [1, 5.2, 4, 0, -1]

// const sum = numbers.reduce((accumulator, value) => {
//     return accumulator + value
// })

// console.log(sum)




//5 - REVERSED STRINGS

//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow'
let str = 'world'

function solution(str) {
     return str.split('').reverse().join('')
}

console.log(solution(str))