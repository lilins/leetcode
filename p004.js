/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let median
  if(nums1.length + nums2.length === 1){
    median = nums1[0] || nums2[0]
    return median
  }
  const middle = Math.floor((nums1.length + nums2.length) / 2)
  let i = nums1.length - 1
  let j = nums2.length - 1
  let k = nums1.length + nums2.length - 1
  while (i >= 0 || j >= 0) {
    i < 0 || nums1[i] < nums2[j] 
      ? nums1[k--] = nums2[j--]
      : nums1[k--] = nums1[i--]
  }
  median = nums1.length % 2 === 0 
    ? (nums1[middle - 1] + nums1[middle]) / 2 
    : nums1[middle]
  return median
};

console.log(findMedianSortedArrays([],[1]))