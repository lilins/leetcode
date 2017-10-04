/**
 * Given an array S of n integers, are there elements a, b, c in S 
 * such that a + b + c = 0? Find all unique triplets in the array 
 * which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => { return a - b })
  let result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1
      let right = nums.length - 1
      let target = 0 - nums[i]
      while (left < right) {
        // console.log(nums, i, left, right, target, nums[left] + nums[right])
        if (target === nums[left] + nums[right]) {
          result.push([nums[i], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]){
            left++
          }
          while (left < right && nums[right] === nums[right - 1]){
            right--
          }
          left ++
          right --
        } else if (target > nums[left] + nums[right]) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))