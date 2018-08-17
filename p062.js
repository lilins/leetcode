/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  findPath(1, 1, m, n)
  return road
};

var road = 0

var findPath = function (i, j, m, n) {
  if (m === 0 || n === 0) {
    return
  }
  if (i === m && j === n) {
    road = road + 1
    return
  }
  if (i === m) {
    findPath(i, j + 1, m, n)
  } else if (j === n) {
    findPath(i + 1, j, m, n)
  } else {
    findPath(i, j + 1, m, n)
    findPath(i + 1, j, m, n)
  }
}

console.log(uniquePaths(7, 3))