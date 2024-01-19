//1
/*
Kata.MakeNegative(1);  // return -1
Kata.MakeNegative(-5); // return -5
Kata.MakeNegative(0);  // return 0
*/

// const makeNegative = (num) => {
//     if(!isNaN(num))
//     {
//         if(num === 0){
//             console.log(num)
//         }else if (num < 0) {
//             console.log(num)
//         } else  {
//         console.log(num = num * -1)
//         }
//     }
//     else {
//         console.log ("NOT a numbuer")
//     }
//      }
//      makeNegative(10)
//      makeNegative(-50)
//      makeNegative(0)
//      makeNegative('N')
// const makeNegative = (num) => {
//     (!isNaN(num))? console.log(num = num * -1) : console.log ("NOT numbuer") }

    // makeNegative(-50)

//let arraLst =[1,3,5,7,9,12,34,56,77,88,98]
// let TestConsoleLog =[]
//  TestConsoleLog =  function displayA () {

//     return "Hello"
//     //    for (let i=0;i<10;i++)
//     //    {
//     //      (i)
//     //    }
// }
// console.log(TestConsoleLog)
//displayA()

//let arraLst =[1,-2,3,-5,7,9,-12,34,44,-56,-65,77,88,98]
let arraLst =[-1,-2,-3,-5,-12]
const sumOfArray = arraLst.reduce((acc,ele)=>{ 
    if(ele > 0 ){
        return  acc+ele
    }else{
        return 0
    }
 } ,0)
 console.log(sumOfArray)