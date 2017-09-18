/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let count = []
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) return true
    else count[nums[i]] = 1
  }
  return false
};

var containsDuplicate2 = function (nums) {
  let count = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (!count.add(nums[i])) return true
  }
  return false
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]))