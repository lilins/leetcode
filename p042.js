/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!


 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0
  let right = height.length - 1
  let result = 0
  let maxHeight = { left: 0, right: 0 }
  while (height[left] < height[left + 1]) { left++ }
  while (height[right] < height[right - 1]) { right-- }
  while (left < right) {
    if (height[left] < height[right]) {
      maxHeight.left = Math.max(height[left], maxHeight.left)
      result += Math.max(maxHeight.left - height[++left], 0)
    } else {
      maxHeight.right = Math.max(height[right], maxHeight.right)
      result += Math.max(maxHeight.right - height[--right], 0)
      
    }
  }
  return result
};

console.log(trap([5,5,6]))