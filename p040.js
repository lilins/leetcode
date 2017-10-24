/**
Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
A solution set is: 
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  let result = []
  candidates.sort((a, b) => { return a - b })
  searchCom(result, candidates, [], target, 0)
  return result
};

const searchCom = function (result, candidates, current, target, start) {
  if (target > 0) {
    for (let i = start; i < candidates.length && target >= candidates[i]; i++) {
      current.push(candidates[i])
      searchCom(result, candidates, current, target - candidates[i], i + 1)
      current.pop()
      while(candidates[i] === candidates[i+1]) i++
    }
  } else if (target === 0) {
    result.push(JSON.parse(JSON.stringify(current)))
  }
}

combinationSum([10, 1, 2, 7, 6, 1, 5, 1], 8)