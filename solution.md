## Return Negative

function makeNegative(num) {
  if (num > 0) {
    return num*(-1)
    } else {
      return num
    }
}

## Sum of Positive

function positiveSum(arr) {
  let sum = 0
  for (i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}

## Squaring an Argument

function square (num1) {
  return num1**2
}
square(2) //enter any number

## Sum Arrays

function sum (numbers) {
    "use strict";
  if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b)
};

## Reversed Strings

function solution(str){
  let result = ``
  for (i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

//arrow function with string turned into an array
const solution = str => [...str].reverse().join``;
