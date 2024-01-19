## Return Negative

```js

function makeNegative(num) {
  if(num<0)
    {
      return num
    }
  if(num>0)
    {
      return(-1*num)
    }
}

```

## Sum of Positive

```js

function positiveSum(arr) {
  
  let sum=0;
  for (let i=0;i<arr.length;i++)
    {
      if(arr[i]>0)
        {
          sum = sum + arr[i]
        }
      
    }
  
  return sum
  
}
```
## Function 2

```js
function square(num)
{
  return (num**2)
}

```

## Sum Arrays

```js
// Sum Numbers
function sum (numbers) {
    "use strict";
  let sum=0
    if(numbers.length == 0)
      {
        return 0
      }
    else
      {
        for (let i =0;i<numbers.length;i++)
          {
            sum =sum+numbers[i]
          }
      }
  return sum
    
};
```

## Reversed Strings

```js

function solution(str){
  let toreturn="";
  let i = str.length-1
  while(i>=00)
    {
      toreturn = toreturn+str[i]
      i = i-1
    }
  return toreturn
}

```
