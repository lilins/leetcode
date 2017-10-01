/**
 * Given a non-empty array of integers,
 * return the third maximum number in this array.
 * If it does not exist, return the maximum number.
 * The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let queue = []
  for(let i=0;i<nums.length;i++){
    if(nums[i] === queue[0] || nums[i] === queue[1] || nums[i] === queue[2]){
      continue
    }else if(queue[0] ===undefined || queue[0] < nums[i]){
      queue.unshift(nums[i])
    }else if(queue[1] ===undefined || queue[1] < nums[i]){
      queue.slice(1,1,nums[i])
    }else if(queue[2] ===undefined || queue[2] < nums[i]){
      queue.slice(2,1,nums[i])
    }
    if(queue.length > 3){
      queue.pop()
    }
    console.log(queue)
  }
  return queue.length < 3 ? queue[0] : queue[queue.length-1] 
};

console.log(thirdMax([1,2]))
console.log(thirdMax([3,3,4,5,6,7]))
console.log(thirdMax([1,2,2]))
console.log(thirdMax([3,3,4,3,4,3,0,3,5,3]))