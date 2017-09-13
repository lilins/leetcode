/**
 * Rotate an array of n elements to the right by k steps.
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 * Note:
 * Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
 * Hint:
 * Could you do it in-place with O(1) extra space?
 * Related problem: Reverse Words in a String II
 */

var rotate = function (nums, k) {
  let newNums = nums.splice(nums.length - k, k)
  for (let i = newNums.length-1; i > -1; i--) {
    nums.unshift(newNums[i])
  }
  console.log(nums)
};

var rotate2 = function (nums, k) {
  for (let i = 0; i< k; i++) {
    nums.unshift(nums.pop())
  }
  console.log(nums)
};

var rotate3 = function (nums, k) {
  reverse(nums,nums+n);
  reverse(nums,nums+k%n);
  reverse(nums+k%n,nums+n);
};

rotate2([1, 2, 3, 4, 5, 6, 7], 3)