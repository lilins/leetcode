/**
 * Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let matrix = []

  let num = 1
  let level = Math.floor(Math.ceil(n / 2))
  /**
	 * -> -> ->
	 * ^      |
	 * |      |
	 * <- <-- V
	 * 
	 * # # # #
	 * %     $
	 * %     $
	 * & & & $
	 *     
	 */
  for (let i = 0; i < level; i++) {
    // top left -> right, shown as #
    for (let j = i; j < n - i; j++) {
      matrix = newArray(matrix, i)
      matrix[i][j] = num++;
    }

    // top right + 1 -> bot, shown as $
    for (let j = i + 1; j < n - i; j++) {
      matrix = newArray(matrix, j)
      matrix[j][n - i - 1] = num++;
    }

    // bot right - 1 -> left, shown as &
    for (let j = n - i - 2; j >= i; j--)
      matrix[n - i - 1][j] = num++;

    // bot left -1 -> top + 1, shown as %
    for (let j = n - i - 2; j > i; j--)
      matrix[j][i] = num++;
  }
  console.log(matrix)
  return matrix;
};

function newArray(arr, i) {
  if (arr[i] === undefined)
    arr[i] = []
  return arr
}

generateMatrix(4)