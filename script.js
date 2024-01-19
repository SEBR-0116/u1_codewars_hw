// // number 1
// const numbers = [1, -5, 0]
// const makeNegative = num => (num > 0 ? -num : num)
//  numbers.forEach(num => console.log(makeNegative(num)))
// //end of number 1

// number 2 
 const numbers = [3, -2, 5, -7, 9, -1];
 const sumPositiveNumbers = numbers => numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0)
 console.log(sumPositiveNumbers(numbers))
//end of number 2

