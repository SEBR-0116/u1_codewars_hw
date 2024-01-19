## Return Negative

```js

function makeNegative(num) {
  // Code?
   
    if(!isNaN(num))
    {
        if(num === 0){
           return num
        }else if (num < 0) {
            return num
        } else  {
         return num = num * -1
        }
    }

}
```

## Sum of Positive

```js
function positiveSum(arr) {

if (arr.length <= 0) {
    return 0;
  } else {
    return arr.reduce((accumulator, value) => {
      if (value > 0) {
        return accumulator + value;
      } else {
        return accumulator;
      }
    }, 0);
  }
  
}
```

## Function 2 - Squaring an Argument

```js
function square(num) {
  return num**2
}
```

## Sum Arrays

```js
// Sum Numbers
function sum (numbers) {
    //"use strict";
    
    if(numbers.length<=0){
      return 0
    } else {
      return numbers.reduce ((acc,ele)=>{ return acc+ele  } ,0)
    }
  
};

```

## Reversed Strings

```js
function solution(str){
  let rString =''
  for(let i=str.length-1;i>=0;i--){
    rString = rString + str.charAt(i)
  }
  return rString
}
```
