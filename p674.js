/**
 * Given an unsorted array of integers, find the length of longest continuous increasing subsequence.

Example 1:
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. 
Example 2:
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
Note: Length of the array will not exceed 10,000.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if(nums.length === 0 ){
    return 0
  } 
  let maxQueue = 0
  let count = 1
  let prev = nums[0]
  nums.shift()
  for(let item of nums){
    if(prev < item){
      count ++
    }else if(prev >= item){
      maxQueue = Math.max(maxQueue, count)
      count = 1
    }
    prev = item
  }
  maxQueue = Math.max(maxQueue, count)
  return maxQueue
};

console.log(findLengthOfLCIS([]))
findLengthOfLCIS([1])
findLengthOfLCIS([1,3,3,3,3,3,5,4,7])