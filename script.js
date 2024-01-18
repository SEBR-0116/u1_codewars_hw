//RETURN NEGATIVE

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


let num = 4

function makeNegative(num) {
    if ((num < 0) ) {
        console.log(`${num} is already negative!`)
    } else {
        console.log(`${num} is not a negative number, but through Javascript sorcery, it is now: ${num * -1}.`)
    }

}
makeNegative(num)