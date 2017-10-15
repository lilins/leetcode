/**
 * Given an array S of n integers, find three integers in S
 * such that the sum is closest to a given number,target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 * 
 * For example, given array S = {-1 2 1 -4}, and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a,b) => {return a-b})
  let min = Number.MAX_SAFE_INTEGER
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while(left < right){
      let tempTarget = nums[i] + nums[left] + nums[right]
      console.log(i,left,right,nums[i],nums[left],nums[right],tempTarget)
      if(Math.abs(target - tempTarget) < min){
        min = Math.abs(target - tempTarget)
        result = tempTarget
      }else if(target >= tempTarget){
        left ++
      }else if(target < tempTarget){
        right --
      }
    }
  }
  return result
}

console.log(threeSumClosest([0,2,1,-3],1))