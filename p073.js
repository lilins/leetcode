/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

 */

 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var col = new Set()
    var row = new Set()
    matrix.forEach((item, index) => {
      item.forEach((event, index2) =>{
        if(event === 0){
          col.add(index)
          row.add(index2)
        }
      })
    })
    matrix.forEach((item, index) => {
      item.forEach((event, index2) =>{
        if(col.has(index) || row.has(index2)){
          matrix[index][index2] = 0
        }
      })
    })
    console.log(matrix)
};

var setZeroes2 = function(matrix) {
  matrix.forEach((item, i) => {
    item.forEach((event, j) =>{
      if(event === 0){
        matrix[i][item.length - 1] = matrix[matrix.length - 1][j] = 0;
      }
    })
  })
  matrix.forEach((item, i) => {
    item.forEach((event, j) =>{
      if (matrix[i][item.length - 1] == 0 || matrix[0][matrix.length - 1] == 0){
        matrix[i][j] = 0;
      }      
    })
  })
};

var a = [
  [0,1,2,0],
  [3,1,5,2],
  [1,3,1,5]
]
setZeroes2(a);