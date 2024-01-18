## Return Negative

const makeNegative = (number) => {
    if (number < 0) {
        console.log (number)
    } else {
        console.log(`-${number}`)
    }
}

## Sum of Positive

let numsArray = [1, -4, 7, 12]

const positiveNums = numsArray.filter((num) => {
    return num > 0
})

const sumPositiveNums = positiveNums.reduce((accumulator, value) => {
    return accumulator + value
}, 0)

console.log(sumPositiveNums)

## Function 2

const squaredNums = (num) => {
    return num**2
}

## Sum Arrays

const numsArray = [1, 3, 5]

const sumOfArray = numsArray.reduce((accumulator, value) => {
    return accumulator + value
}, 0)

## Reversed Strings

const reverseWord = (word) => {
    const reversed = word.split('').reverse().join('');
    console.log(reversed)
}

reverseWord("world")
reverseWord("word")
