/**
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let oriArr = [].concat(nums)
  nums.sort((a,b)=>{return a-b})
  let i,j;
  for(i=0,j=nums.length-1;i<=j;){
    if(nums[i] === oriArr[i]){
      i++
    }
    if(nums[j] === oriArr[j]){
      j--
    }
    if(nums[i] !== oriArr[i] && nums[j] !== oriArr[j]){
      break
    }
  }
  return j-i+1 > 0 ? j-i+1 : 0
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([2, 4, 4, 8, 8, 9, 15]))
console.log(findUnsortedSubarray([15]))
console.log(findUnsortedSubarray([]))