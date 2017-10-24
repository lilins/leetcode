/**
 * Given an array of integers sorted in ascending order, 
 * find the starting and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 * 
 * For example,
 * Given [5, 7, 7, 8, 8, 10] and target value 8,
 * return [3, 4].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [
    search(nums, target, 'front'),
    search(nums, target, 'rear')
  ]
};

var searchRange2 = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while(nums[left] && nums[left] !== target){
    left ++
  }
  if(left === nums.length){
    return [-1, -1]
  }else{
    while(nums[right] && nums[right] !== target){
      right --
    }
  }
  return [left, right]
};

const search = (nums, target, type) => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      if (type === 'front') {
        if (mid === 0) return 0
        if (nums[mid] !== nums[mid - 1]) return mid
        right = mid - 1
      } else {
        if (mid === nums.length - 1) return nums.length - 1
        if (nums[mid] !== nums[mid + 1]) return mid
        left = mid + 1
      }
    }
  }
  return -1
}

let test = []
for(let i = 1; i < 10; i++){
  test.push(i)
  if(i === 3){
    for(let j = 1;j<80000; j++){
      test.push(i)
    }
  }
  if(i === 4){
    for(let j = 1;j<30000; j++){
      test.push(i)
    }
  }
  if(i === 5){
    for(let j = 1;j<50000; j++){
      test.push(i)
    }
  }
}


// console.time("Array initialize")
// console.log(searchRange(test, 3))
// console.timeEnd("Array initialize")

console.time("Array initialize2")
console.log(searchRange2(test, 3))
console.timeEnd("Array initialize2")