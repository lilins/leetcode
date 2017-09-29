/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * Note:
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 */

/**
* @param {number[]} nums1
* @param {number} m
* @param {number[]} nums2
* @param {number} n
* @return {void} Do not return anything, modify nums1 in-place instead.
*/
var merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  // if(m===0){
  //   for(let i=0;i<n;i++){
  //       nums1[i] = nums2[i]
  //   }
  // }
  while (i > -1 || j > -1) {
    let a = nums1[i] === undefined ? Number.MIN_SAFE_INTEGER : nums1[i]
    let b = nums2[j] === undefined ? Number.MIN_SAFE_INTEGER : nums2[j]
    nums1[k--] = Math.max(a, b)
    a > b ? i-- : j--
  }
  console.log(nums1)
};

var merge2 = function (nums1, m, nums2, n) {
  while (n > 0) nums1[m + n - 1] = (m == 0 || nums2[n - 1] > nums1[m - 1]) ? nums2[--n] : nums1[--m]
  console.log(nums1)
}

merge([0],0,[1],1)
merge([2,0],1,[1],1)
// merge([1, 4, 5, 6, 7, 9, 11, 12], 8, [1, 2, 3, 4, 5, 6, 7, 8, 9], 9)