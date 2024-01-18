## Return Negative

```js
function makeNegative(num) {
  return Math.abs(num) * -1;
}
```

## Sum of Positive

```js
function positiveSum(arr) {
  return arr.reduce((total, value) => {return value < 0 ? total : total + value}, 0)
}
```

## Function 2

```js
const square = (num) => {
  return num**2;
}
```

## Sum Arrays

```js
function sum (numbers) {
    return numbers.reduce((total, value) => total + value,0)  
};
```

## Reversed Strings

```js
function solution(str){
  return [...str].reverse().join("")
}
```
