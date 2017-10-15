/**
 * Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * 
 * Note: The solution set must not contain duplicate quadruplets.
 * 
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => { return a - b })
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1 ; j< nums.length - 1; j++){
      if(nums[i] === nums[j]){
        
      }
      let left = j + 1
      let right = nums.length - 2
      while (left <  right) {
        let sum = nums[left] + nums[i] + nums[j] + nums[right]
        if (target === sum){
          result.push([nums[left],nums[i],nums[j],nums[right]])
          while(nums[left] === nums[left + 1])
        }else if(sum < target){
          left ++
        }else if(sum > target){
          right --
        }
      }
    }
  }
  return result
}

console.log(fourSum([1, 0, -1, 0, -2, 2],0))