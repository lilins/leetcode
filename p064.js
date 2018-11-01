/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var res = []
  var row = grid.length
  var col = grid[0].length
  for (let i = 0; i < row; i++) {
    res[i] = []
    for (let j = 0; j < col; j++) {
      res[i][j] = 0
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) {
        res[i][j] = grid[i][j]
      } else if (i !== 0 && j === 0) {
        res[i][j] = grid[i][j] + res[i - 1][j]
      } else if (i === 0 && j !== 0) {
        res[i][j] = grid[i][j] + res[i][j - 1]
      } else {
        res[i][j] = grid[i][j] + Math.min(res[i - 1][j], res[i][j - 1])
      }
    }
  }
  return res[row-1][col-1]
  console.log(res)
};

var grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]

minPathSum(grid)