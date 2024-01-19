## Return Negative

function makeNegative(num) {
  if (num <= 0) 
    return num
  return num * -1 
}

## Sum of Positive

function positiveSum(arr) {
  let sum = 0
  if (arr.length <= 0) {
    return 0
    } else if (arr.length > 0) {
      for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          sum += arr[i]
        }
      }
      return sum
    }
}

## Function 2

function square(number) {
   return Math.pow(number, 2)
}


## Sum Arrays

function sum (numbers) {
  let sum = 0
  if (numbers.length <= 0) {
    return 0
    } else if (numbers.length > 0) {
      for (i = 0; i < numbers.length; i++) {
        if (numbers[i]) {
          sum += numbers[i]
        }
      }
      return sum
    }
}

## Reversed Strings

function solution(str){
  const solution = str.split('').reverse().join('')
  return solution
}
