/**
 * Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
  nums = Array.from(new Set(nums))
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] !== i){
      let k = nums[i]
      let temp = nums[i]
      nums[i] = nums[k]
      nums[k] = temp
    }
  }
  let j = 1
  while(nums[j]!==undefined){
    if(nums[j] !== j){
      return j
    }
    j++
  }
  return j
};

console.log(firstMissingPositive([1,1]))