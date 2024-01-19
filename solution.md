## Return Negative

```js
let num = 4

function makeNegative(num) {
    if ((num < 0) ) {
        console.log(`${num} is already negative!`)
    } else {
        console.log(`${num} is not a negative number, but through Javascript sorcery, it is now: ${num * -1}.`)
    }

}
makeNegative(num)
```


## Sum of Positive

```js
function positiveSum(arr){
    let sum = 0
 
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) sum += arr[i];
    }
    return sum
}
console.log(positiveSum([1,-2,3,4,5]))
```


## Function 2

```js
function square(number) {
    return number * number;
}
 console.log(square(5))
```


## Sum Arrays

```js
const numbers = [1, 5.2, 4, 0, -1]

const sum = numbers.reduce((accumulator, value) => {
    return accumulator + value
})

console.log(sum)
```

## Reversed Strings

```js

```
