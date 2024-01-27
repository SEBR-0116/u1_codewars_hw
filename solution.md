## Return Negative
function makeNegative(num) {
  if (num<=0) return num ;
  return num * -1 ;
}
```js

```

## Sum of Positive
function positiveSum(arr) {
  return arr.reduce((prev, current) => {
    if (current > 0) {
      return prev + current;
    }

    return prev
  }, 0)
} 
```js

```

## Function 2
const square = s => s**2 
```js

```

## Sum Arrays
function sum (numbers) {
      let result = 0;
      numbers.forEach(item => result +=item);
    return result; 
  };
```js

```

## Reversed Strings
const solution = (s) => [...s].reverse().join``;
```js

```
