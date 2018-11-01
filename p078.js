/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var list = []
  backtrack = (tempList, start) => {
    list.push(JSON.parse(JSON.stringify(tempList)))
    for(var i = start; i<nums.length; i++){
      tempList.push(nums[i])
      backtrack(tempList, i+1)
      tempList.pop(nums[i])
    }
  }
  backtrack([], 0)
};
var a = [1,2,3, 4]
subsets(a)
