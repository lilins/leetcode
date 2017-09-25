/**
 * 两个变量交换
 * 
 * 1.三变量交换
 */

let a = 1
let b = 2

const change = (a, b) => {
  let c = a
  a = b
  b = c
  return [a, b]
}

/** 2.变量交换 */

const change2 = (a, b) => {
  a = a + b
  b = a - b
  a = a - b
  return [a, b]
}





