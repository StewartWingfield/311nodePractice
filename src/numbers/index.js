const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  const initialValue = 0;
const sumWithInitial = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
return sumWithInitial
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  if (arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    const num = sum - arr[i]
    if (arr.indexOf(num, i + 1) !== -1) {
      return true;
    } else {
      return false
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}