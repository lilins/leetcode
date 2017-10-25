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
  let matrix = [];

  // Edge Case
  if (n == 0) {
    return matrix;
  }

  // Normal Case
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  let num = 1; //change
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = num++; //change
    }
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {

      matrix[i][colEnd] = num++; //change
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      if (rowStart <= rowEnd)
        matrix[rowEnd][i] = num++; //change
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      if (colStart <= colEnd)
        matrix[i][colStart] = num++; //change
    }
    colStart++;
  }
  console.log(matrix)
  return matrix;
};

generateMatrix(3)