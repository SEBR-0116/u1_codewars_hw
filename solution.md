## Return Negative

```
function makeNegative(num) {
  if (num > 0) {
    return (num * -1)
    } else {
      return num
    }
  }

```

## Sum of Positive

```
function positiveSum(arr) {
    return arr.filter(x => x>=0).reduce((a, c) => a + c, 0)
  }

```

## Function 2

```
const square = (num) => {return num**2}

```

## Sum Arrays

```
const sum = (numbers) => {
  return numbers.reduce((a, b) => (a+b),0)
}

```

## Reversed Strings

```
const solution = str => str.split('').reverse().join('');

```
