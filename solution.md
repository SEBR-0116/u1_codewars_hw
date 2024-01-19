## Return Negative

function makeNegative(number) {
  if (number > 0) {
    return -number;
  } else {
    return number;
  }
}
console.log(makeNegative(1));  

## Sum of Positive

function sumOfPositives(numbers) {
  return numbers.reduce((sum, number) => (numaber > 0 ? sum + number : sum), 0);
}
const exampleArray = [1, -10 4, 1];
const result = sumOfPositives(exampleArray);
console.log(result); 

## Function 2

function sqrNumber(number) {
  return number * number;
}
const num = 5;
const result = sqrNumber(num);
console.log(result); 

## Sum Arrays

function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sumArray([1, 5.2, 4, 0, -1]));            


## Reversed Strings

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('world'));  
console.log(reverseString('word'));  

