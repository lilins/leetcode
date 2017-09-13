/**
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * The digits are stored such that the most significant digit is at the head of the list.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let digitsArray = convertToArray(digits)
  let carry = 0
  for (let i = digitsArray.length - 1; i > -1 ; i--) {
    if (i === digitsArray.length - 1 || carry === 1) {
      if (digitsArray[i] + 1 === 10) {
        carry = 1
        digitsArray[i] = 0
        if(i === 0 ){
          digitsArray.unshift(1)
          break
        }
      } else {
        carry = 0
        digitsArray[i] = digitsArray[i] + 1
      }
    } else {
      break
    }
  }
  return digitsArray
};

var plusOne2 = function (digits) {
  let digitsArray = convertToArray(digits)
  let carry = 1
  for (let i = digitsArray.length - 1; i > -1 ; i--) {
    if(carry === 0) break
    let temp = digitsArray[i] + carry
    digitsArray[i] = temp%10
    carry = Math.floor(temp/10)
  }
  if(carry){
    digitsArray.unshift(1)
  }
  return digitsArray
};

const convertToArray = function (digits) {
  let digitsArray = []
  let i = 0;
  while (digits > 0) {
    digitsArray[i] = digits % 10
    digits = Math.floor(digits / 10)
    i++
  }
  return digitsArray.reverse()
}

console.log(plusOne2(989))

