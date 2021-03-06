/**
 * Given an array nums, write a function to move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function,
 * nums should be [1, 3, 12, 0, 0].
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0
  let current = 0
  for(let i=0;i<nums.length;i++){
      if(nums[i] === 0){
          count++
          if(nums[i+1] && nums[i+1] !== 0){
            nums[current] = nums[i+1]
            current++
            i++
          }
      }else{
        nums[current] = nums[i]
        current++
      }
  }
  for(let j=0;j<count;j++,current++){
      nums[current] = 0
  }
  console.log(nums)
};

var moveZeroes2 = function(nums) {
  let count = 0
  let i = 0
  while(nums[i] !== undefined){
    if(nums[i] === 0){
      nums.splice(i,1)
      count ++
    }else{
      i++
    }
  }
  for(let j=0;j<count;j++){
    nums.push(0)
  }
  console.log(nums)
};

moveZeroes2([0])
moveZeroes2([0, 1, 0, 0, 0, 0, 3, 12])