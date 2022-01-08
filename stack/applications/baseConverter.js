import { Stack } from '../stack-array.js';

//十进制转2进制
const decimalToBinary = (decNumber) => {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''
  while (number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop()
  }
  return binaryString
}

// console.log(decimalToBinary(10))

//十进制转2～32任意进制 
const baseConverter = (decNumber, base) => {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let baseString = ''

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    number = Math.floor(number / base)
    remStack.push(rem)
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  return baseString
}
console.log(baseConverter(100345,8))
console.log(baseConverter(100345,16))