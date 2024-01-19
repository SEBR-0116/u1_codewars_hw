## Return Negative

function makeNegative(number) {
  if (number > 0) {
    return -number;
  } else {
    return number;
  }
}
Kata.MakeNegative(1);  // return -1
Kata.MakeNegative(-5); // return -5
Kata.MakeNegative(0);  // return 0

## Sum of Positive

function sumOfPositives(numbers) {
  return numbers.reduce((sum, number) => (numaber > 0 ? sum + number : sum), 0);
}
const exampleArray = [1, -4 7, 12];
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
console.log(sumArray([]));
console.log(sumArray([-2.398]));

## Reversed Strings

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('world'));  
console.log(reverseString('word'));  

