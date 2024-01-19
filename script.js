
//1
function makeNeg(num){
    if(num > 0 ){
        return num * -1
    } else if (num < 0){
        return num
    } else {
        console.log("Number is 0")
    }
}
makeneg()

//2
sum = 0
array = [1,-4,7,12]
function sumOfPositives(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            array[i].delete
        } else {
        return sum+= array[i]
    }
    }
}