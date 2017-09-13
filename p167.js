/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 * Please note that your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
var twoSum = function (numbers, target) {
  let numbers2 = []
  let index1 = 0, index2 = 0;
  numbers.forEach(function (item, index) {
    numbers2[item] = index
  })
  for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i]
    if (target - item < 0) {
      break
    }
    if (numbers2[target - item]) {
      index1 = i
      index2 = numbers2[target - item]
      break
    }

  }
  console.log(index1 + 1, index2 + 1)
};

var twoSum2 = function (numbers, target) {
  let left = 0, right = numbers.length - 1;
  while (numbers[left] + numbers[right] != target) {
    numbers[left] + numbers[right] > target ? right-- : left++
  }
  console.log(left + 1, right + 1)
}

twoSum2([2, 7, 11, 15], 9)

twoSum2([1, 4, 7, 11, 15], 15)