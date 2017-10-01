/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
 * some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * Could you do it without extra space and in O(n) runtime?
 * You may assume the returned list does not count as extra space.
 * Example:
 * Input:
 * [4,3,2,7,8,2,3,1]
 * Output:
 * [5,6]
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = []
  for(let i = 0;i<nums.length;i++){
    nums[(nums[i]-1)%nums.length] += nums.length
  }
  for(let i=0;i<nums.length;i++){
    if(nums[i] <= nums.length){
      result.push(i+1)
    } 
  }
  console.log(nums,result)
};

findDisappearedNumbers([4,3,2,7,8,2,3,1])