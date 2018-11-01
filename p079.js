/**
 * Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  var exist = []
  var findFirst = () => {
    var result = []
    board.forEach((item, i) => {
      item.forEach((event, j) => {
        if (word[0] === event) {
          result.push([i, j])
        }
      })
    })
    return result
  }
  var first = findFirst()
  first.forEach(item => {
    exist.push(findPath2(0, item[0], item[1]))
  })
  return exist.some(item => item)
};

var findPath = (index, i, j) => {
  if (index === word.length) {
    exist = true
    return true
  }
  var re = false
  if (i + 1 < board.length && board[i + 1][j] === word[index]) {
    var temp = board[i + 1][j]
    board[i + 1][j] = ''
    re = findPath(index + 1, i + 1, j)
    if (re) {
      return true
    } else {
      board[i + 1][j] = temp
    }
  }
  if (j + 1 < board[0].length && board[i][j + 1] === word[index]) {
    var temp = board[i][j + 1]
    board[i][j + 1] = ''
    re = findPath(index + 1, i, j + 1)
    if (re) {
      return true
    } else {
      board[i][j + 1] = temp
    }
  }
  if (i - 1 >= 0 && board[i - 1][j] === word[index]) {
    var temp = board[i - 1][j]
    board[i - 1][j] = ''
    re = findPath(index + 1, i - 1, j)
    if (re) {
      return true
    } else {
      board[i - 1][j] = temp
    }
  }
  if (j - 1 >= 0 && board[i][j - 1] === word[index]) {
    var temp = board[i][j - 1]
    board[i][j - 1] = ''
    re = findPath(index + 1, i, j - 1)
    if (re) {
      return true
    } else {
      board[i][j - 1] = temp
    }
  }
  return false
}

var findPath2 = (index, i, j) => {
  console.log(index, i, j)
  var exist = false
  if (index === word.length) return true
  if (i === -1 || j === -1 || i === board.length || j === board[i].length) return false
  console.log(board[i][j], word[index])
  if (board[i][j] !== word[index]) return false
  console.log(22, board)
  var temp = board[i][j]
  board[i][j] = ''
  exist = findPath2(index + 1, i + 1, j)
    || findPath2(index + 1, i, j + 1)
    || findPath2(index + 1, i - 1, j)
    || findPath2(index + 1, i, j - 1)
  board[i][j] = temp
  return exist
}

var board = [
  ["b", "a", "a", "b", "a", "b"],
  ["a", "b", "a", "a", "a", "a"],
  ["a", "b", "a", "a", "a", "b"],
  ["a", "b", "a", "b", "b", "a"],
  ["a", "a", "b", "b", "a", "b"],
  ["a", "a", "b", "b", "b", "a"],
  ["a", "a", "b", "a", "a", "b"]]
var word = "aabbbbabbaababaaaabababbaaba"

console.log(exist(board, word))
