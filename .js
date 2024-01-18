//1
function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else return num / -1;
}

//2
nums = [1, 2, 5, -7, -8, 10];

function sumOfPositive(nums) {
  let sum = 0;
  for (let num of nums) {
    if (num >= 1) {
      sum += num;
    }
  }
  return sum;
}

//3
function squaringAnArgument(num) {
  return num ** 2;
}

//4
function sumArrays(numbers) {
  let sum = 0;
  if (numbers.length == 0) {
    return sum;
  } else {
    for (let num of numbers) {
      sum += num;
    }
  }
  return sum;
}

//5
function reversed(string){
    let arr=string.split('')
    return arr.reverse().join('')
}

