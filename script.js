//1
// function makeNegative(num) {
//     // Code?
//     return -Math.abs(num)//keep the negative outside of the number math.abs takes absolute value of the number
//   }

// console.log(makeNegative(144))

//2
// function positiveSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }
// const result = positiveSum([1,2,3,4,5,-10])
// console.log(result)

//3
// function square(arg) {      //Another Solve is:
//     return (arg*arg)        //const square = (arg) => n*n
// }
// const result = square(3)
// console.log(result)

//4
// Sum Numbers Write a function that takes an array of numbers and returns 
// the sum of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.
// function sum(numbers) {
//     "use strict"    //strict mode                                   //Faster Solve
//     let sumNums = 0 //initialize sunNums as a number                //return numbers.reduce((a, b) => a + b, 0)
//     for (let i = 0; i < numbers.length; i++) { //loop through array //numbers.reduce : functions accumulated result
//         sumNums += numbers[i] //return the sum after each loop
//     }
//     return sumNums
// }
// let result =  sum([1,4,7,2,])
// console.log(result)

//5
//Complete the solution so that it reverses the string passed into it.
// function solution(str) {            
//     return str.split('').reverse().join('')         //.split('') splits string into an array individually
// }                                                   //.reverse  reverses orders of elem in arrays
//                                                     //.join combines elems of an array into a single str
// result = solution('hello, world')
// console.log(result)