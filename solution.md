## Return Negative

```js
function makeNegative(num) {
  // Code?
  if(num <= 0 ){
    return num
  } else if(num > 0){
    return -Math.abs(num)
  }
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((acc, currentVal) => acc + currentVal, 0)
}
```

## Function 2

```js
function square(num){
  return num ** 2;
}
```

## Sum Arrays

```js
function sum (numbers) {
    "use strict";
     return numbers.reduce((a, c) => a + c, 0)
    
};
```

## Reversed Strings

```js
function solution(str){
  return str.split('').reverse().join('')
}
```
