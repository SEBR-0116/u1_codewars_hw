// // number 1
// const numbers = [1, -5, 0]
// const makeNegative = num => (num > 0 ? -num : num)
//  numbers.forEach(num => console.log(makeNegative(num)))
// //end of number 1

// number 2 
//  const numbers = [3, -2, 5, -7, 9, -1];
//  const sumPositiveNumbers = numbers => numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0)
//  console.log(sumPositiveNumbers(numbers))
//end of number 2

// number 3
// function squareNumber(number){
//     return number * number
// }
// let result = squareNumber(7)
// console.log(result)
//end of number 3

// number 4 
// function sumOfNumbers(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i]
//     }
//     return sum
// }

// let result = sumOfNumbers([1, -2, 3, -3, 7])
// console.log(result)
//end of number 4

// number 5
function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('world'))
console.log(reverseString('word'))