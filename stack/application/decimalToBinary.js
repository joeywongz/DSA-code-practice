import { Stack } from '../stack-array.js';

const decimalToBinary = (decNumber) => {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''
  while (number > 0) {
    rem = Math.floor(number%2)
    remStack.push(rem)
    number = Math.floor(number/2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop() 
  }
  return binaryString
}

console.log(decimalToBinary(10))