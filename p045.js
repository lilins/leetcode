/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:
Given array A = [2,3,1,1,4]

The minimum number of jumps to reach the last index is 2. 
(Jump 1 step from index 0 to 1, then 3 steps to the last index.)

Note:
You can assume that you can always reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let step = 0;
  let currentEnd = 0;
  let max = 0;
  for(let i=0; i<nums.length-1; i++) {
    max = Math.max(max, i+nums[i]);
    console.log('i', i ,'nums[i]', nums[i],'step', step,'currentEnd',  currentEnd, 'max', max)
    if( i === currentEnd ) {
        step++;
        currentEnd = max;
    }
  }
  return step
};

var jump2 = function (nums) {
  let step = { step: 0, minStep: nums.length + 1 }
  if (nums.length < 2) {
    step.minStep = 0
  } else {
    stepJump(nums, step, 0)
  }
  return step.minStep
};
const stepJump = function (nums, step, current) {
  for (let i = 1; i < nums[current] + 1 && step.step < step.minStep; i++) {
    if (current + i >= nums.length - 1) {
      step.step++
      step.minStep = Math.min(step.minStep, step.step)
      step.step--
      break
    } else {
      step.step++
      stepJump(nums, step, current + i)
      step.step--
    }
  }
}


console.log(jump([2,3,1,1,4]))