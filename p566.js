/**
 * In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
Example 2:
Input: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4
Output: 
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
Note:
The height and width of the given matrix is in range [1, 100].
The given r and c are all positive.

 */

 /**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let oriRow = nums.length
  let oriCol = oriRow !== 0 ? nums[0].length : 0
  if(oriRow*oriCol === r*c){
    nums = JSON.stringify(nums)
      .replace(/\[/g,'')
      .replace(/\]/g,'')
      .split(',')
      .map(item=>{return parseInt(item)})
    let k = 0
    let arr = []
    for(let i=0;i<r;i++){
      arr[i] = []
      for(let j=0;j<c;j++){
        arr[i][j] = nums[k]
        k++
      }
    }
    return arr
  }else{
    return nums
  }
};


console.log(matrixReshape([[1,2],[3,4]],1,4))
console.log(matrixReshape([[1,2],[3,4],[1,3],[2,2]],2,4))
console.log(matrixReshape([[1,2],[3,4]],4,1))
console.log(matrixReshape([[1,2],[3,4]],2,4))