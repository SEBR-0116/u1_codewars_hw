
// const makeNumNegative = (number) => {
// if (number <= 0 ){
//     console.log(number)
// } else {
//     console.log(-Math.abs(number)) 
// }
// }
// makeNumNegative (-24);
//************ */
// const squaredNum = (number) => {console.log(Math.pow(number, 2)) }

// squaredNum(5)
//******************** */

// const numbers = [1, 5.2, 4, 0, -1]
 
// const sum = numbers.reduce((accumulator, value) => {
//     return accumulator + value 
//   }, 0)
numbers =[1,-4,7,12] 

const addPositiveNums = numbers.filter(num => num > -1 ); {

    const sum = addPositiveNums.reduce((accumulator, value) => {
            return accumulator + value 
          }, 0)

console.log(sum)
}

  




//   console.log(sum)

// function reverseString(str) {
//     const stringRev =  str.split('').reverse().join('');
//     console.log(stringRev);
// }
// reverseString("world");
// reverseString("word");
