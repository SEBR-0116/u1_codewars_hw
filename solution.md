## Return Negative

```js
function makeNegative(num) {
  // Code?
  return -Math.abs(num)
}
```

## Sum of Positive

```js
function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}
```

## Function 2

```js
function square(arg) {
    return (arg*arg)
}
```

## Sum Arrays

```js
function sum(numbers) {
    "use strict"
    let sumNums = 0
    for (let i = 0; i < numbers.length; i++) {
        sumNums += numbers[i]
    }
    return sumNums
}
```

## Reversed Strings

```js
function solution(str) {            
    return str.split('').reverse().join('')
}
```
