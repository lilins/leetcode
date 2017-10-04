/**
 * Given n non-negative integers a1, a2, ..., an,
 * where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of
 * line i is at (i, ai) and (i, 0). Find two lines, 
 * which together with x-axis forms a container, 
 * such that the container contains the most water.
 * 
 * Note: You may not slant the container and n is at least 2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxWater = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    maxWater = Math.max(maxWater, (right - left) * Math.min(height[left], height[right]))
    height[left] < height[right] ? left++ : right--
  }
  console.log(maxWater)
  return maxWater
};


maxArea([1,6, 0, 5, 2])