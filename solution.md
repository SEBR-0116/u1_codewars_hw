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
let arraLst =[1,-2,3,-5,7,9,-12,34,44,-56,-65,77,88,98]
//let arraLst =[-1,-2,-3,-5,-12]
const sumOfArray = arraLst.reduce((acc,ele)=>{ 
    if(ele > 0 ){
        return  acc+ele
    }else{
        return 0
    }
 } ,0)
 console.log(sumOfArray)
```

## Function 2

```js

```

## Sum Arrays

```js

```

## Reversed Strings

```js

```
