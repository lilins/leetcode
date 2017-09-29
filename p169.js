/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * Credits:
 * Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
* @param {number[]} nums
* @return {number}
*/
var majorityElement = function (nums) {
  let count = []
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] ? count[nums[i]] : 0
    if (++count[nums[i]] > (nums.length / 2)) {
      console.log(nums[i])
    }
  }
  console.log(count)
};

var majorityElement2 = function (nums) {
  let major = nums[0], count = 1;
  for (let i= 1; i < nums.length;i++){
    if (count == 0) {
      count++;
      major = nums[i];
    } else if (major == nums[i]) {
      count++;
    } else count--;
  }
  console.log(major)
};


majorityElement([1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1])