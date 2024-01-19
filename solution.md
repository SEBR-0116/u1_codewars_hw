## Return Negative

```js
const MakeNegative = (number) => {
    if(number > 0) {
        console.log(number * -1)
    }
    else if(number <= 0) {
        console.log(number)
    }
    else {
        console.log(`${number} must be a number!`)
    }
}

MakeNegative(-1);
MakeNegative(0);
MakeNegative(3);
MakeNegative("hello");
```

## Sum of Positive

```js
let array = [1, -4, 7, 12]

const addPositives = (array) => {
    let arrayTotal = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            console.log(`${array[i]}\n + `)
            arrayTotal = (arrayTotal + array[i]);
        }
        
    }
    console.log(`= ${arrayTotal}`)

}
addPositives(array);
```

## Function 2

```js
let argSquared = (number) => {
    console.log(`${number} squared is equal to ${(number ** 2)}`)
}
//test case
argSquared(4);
```

## Sum Arrays

```js
let array = [1, 4.3, 15, -6.1, 53.068, -37, -2, 10.00]

const sumNums = (array) => {
    let arrayTotal = 0;
    for(let i = 0;i < array.length; i++) {
        arrayTotal = (arrayTotal + array[i])
    }
    console.log(`Array Total: ${arrayTotal}`)
}
sumNums(array);
```

## Reversed Strings

```js
let word1 = "world"
let word2 = "word"

let reverse = (W) => {
    return W.split('').reverse('').join('');
}

console.log(reverse(word1));
console.log(reverse(word2));
```
