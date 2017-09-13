/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */


var maxSubArray = function (nums) {
  let dp = []
  dp[0] = nums[0]
  let max = dp[0]
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + (dp[i - 1] || 0), nums[i])
    max = Math.max(max, dp[i])
  }
  return max
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

console.log(maxSubArray([-2,7,-3,4,-1,2,1,-5,4]))