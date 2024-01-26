## Return Negative
function makeNegative(num) {
    return num*-1
}
console.log(squareTheArgument())

```js

```

## Sum of Positive
function positiveSum(arr) {
  let sum = 0;
  for (let num of arr) {
    if(num >= 0) {
      sum += num;
    }
  }
  return sum;
}

```js

```

## Function 2
function squareTheArgument() {
    return num*num
}
console.log(squareTheArgument())

```js

```

## Sum Arrays
let array = [7, 11, 24, 25];
let sum = 0;

array.forEach(item => {
    sum += item;
});

console.log(sum);
```js

```

## Reversed Strings
function reverseString(str) {
    const strRev = str.split('').reverse().join('')
    console.log(strRev);
    
    }
reverseString("World")
reverseString("word")
```js

```
