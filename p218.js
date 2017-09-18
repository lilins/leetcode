/**
 * Given an array of integers and an integer k,
 * find out whether there are two distinct indices i and j in the array
 * such that nums[i] = nums[j]
 * and the absolute difference between i and j is at most k.
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let count = []
  let index = 0
  for(let item of nums){
    count[item] ? count[item].push(index) : count[item] = [index]
    let result = count[item].length >= 2 
      ? count[item][count[item].length-1] - count[item][count[item].length-2]
      : k+1
    if(result <= k) return true
    index ++
  }
  return false
};

/**
 * 在这里，可以不保存所有出现的值，只需要保留上一个值即可。
 */

console.log(containsNearbyDuplicate([1,2,3,4,5,1,1],2))