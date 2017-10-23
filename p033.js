/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else {
      if (nums[mid] > target && nums[left] <= target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return -1
}

console.log(search([0, 1, 3, 4, 5, 6, 7], 5))
console.log(search([7, 0, 1, 3, 4, 5, 6], 5))
console.log(search([6, 7, 0, 1, 3, 4, 5], 5))
console.log(search([5, 6, 7, 0, 1, 3, 4], 5))
console.log(search([4, 5, 6, 7, 0, 1, 3], 5))
console.log(search([3, 4, 5, 6, 7, 0, 1], 5))
console.log(search([1, 3, 4, 5, 6, 7, 0], 5))
console.log(search([0, 1, 3, 4, 5, 6, 7], 5))
console.log(search([0, 1, 3, 4, 5, 6, 7], 2))