// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0

var searchInsert = function(nums, target) {
  let result = 0
  if(target<nums[0]){
    return 0
  }
  if(target>nums[nums.length-1]){
    return nums.length
  }
  for(let i=0;i<nums.length;i++){
      if(target === nums[i]){
          result = i
          break
      }else if(nums!==0&&target>nums[i-1]){
          result = i
      }else{
          
      }
  }
  return result
};

// other

const searchInsert2 = function(nums, target) {
  let low = 0, high = nums.length-1;
  while(low<=high){
      let mid = parseInt((low+high)/2);
      if(nums[mid] === target) return mid;
      else if(nums[mid] > target) high = mid-1;
      else low = mid+1;
  }
  return low;
}

console.log(searchInsert2([1,3,5,6], 5))
console.log(searchInsert2([1,3,5,6], 2))
console.log(searchInsert2([1,3,5,6], 7))
console.log(searchInsert2([1,3,5,6], 0))