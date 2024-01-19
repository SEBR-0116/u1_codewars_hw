## Return Negative

```js
function makeNegative(num1) {
  if (num1 > 0) {
    num1*=-1;
    console.log(num1);
  } else if (num1 <= 0) {
    console.log(num1);
  } else {
    console.log('Check your code!')
  }
}
makeNegative(-2)
```

## Sum of Positive

```js
let numbersArray = [-1,4,5,-6,7,-8];
let sumOfNumbers = 0;
for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i]>0){
    sumOfNumbers+=numbersArray[i];
  }
}
  console.log(sumOfNumbers);
```

## Function 2

```js
function makeSq(num) {
  console.log(Math.pow(num,2));
}
makeSq(8);

```

## Sum Arrays

```js
let arraySet1 = [-1,4,5,-6,7,-5];
let arraySet2 =[];

function sumOfArray(arrayName) {
    let sumOfArrayValues = 0;
  if (arrayName.length <= 0){
    console.log(`${arrayName = sumOfArrayValues}`);
  } else if (arrayName.length > 0) {
      let sumOfArrayValues = 0;
      for (let i = 0; i < arrayName.length; i++) {
        sumOfArrayValues+=arrayName[i];
      }
    console.log(sumOfArrayValues);
  } else {
    console.log('Check your code!')
  }
}
sumOfArray(arraySet1);
```

## Reversed Strings

```js
function reverseLetters(word) {
  let tempArray = [];
  for (let i = 0; i < word.length; i++) {
    tempArray[i] = word.charAt(i)
    }
  //console.log(tempArray);
  let reversedArray = tempArray.reverse();
  //console.log(reversedArray);
  let newReversedWord = reversedArray.join('');
  console.log(newReversedWord);
}
reverseLetters('Welcome');
```
