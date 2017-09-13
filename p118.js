/**
 * Given numRows, generate the first numRows of Pascal's triangle.
 * For example, given numRows = 5,
 * Return
 * [
 * [1],
 * [1,1],
 * [1,2,1],
 * [1,3,3,1],
 * [1,4,6,4,1]
 * ]
 */

var generate = function (numRows) {
  let result = []
  for (let i = 0; i < numRows; i++) {
    let temp = []
    for (let j = 0; j < i + 1; j++) {
      temp.push(i ? (result[i - 1][j - 1] || 0) + (result[i - 1][j] || 0) : 1)
    }
    result.push(temp)
  }
  console.log(result)
};

generate(8)