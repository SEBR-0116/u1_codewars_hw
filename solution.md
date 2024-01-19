## Return Negative
const numbers = [1, -5, 0]
const makeNegative = num => (num > 0 ? -num : num)
 numbers.forEach(num => console.log(makeNegative(num)))
```js

```

## Sum of Positive
const numbers = [3, -2, 5, -7, 9, -1];
 const sumPositiveNumbers = numbers => numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0)
 console.log(sumPositiveNumbers(numbers))
```js

```

## Function 2
function squareNumber(number){
    return number * number
}
let result = squareNumber(7)
console.log(result)
```js

```

## Sum Arrays
function sumOfNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    return sum
}

let result = sumOfNumbers([1, -2, 3, -3, 7])
console.log(result)
```js

```

## Reversed Strings
function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('world'))
console.log(reverseString('word'))
```js

```
