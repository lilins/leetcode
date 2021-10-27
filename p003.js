/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
const { log, slog } = require('./common.js');

const input = [
  'abcabcbb',
  'bbbbbb',
  'pwwkew',
  'tepdadas',
  ' ',
  ' 1 ',
  'dvdf',
  'qvcqwes'
]
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let number = 0;
  const a = new Map();
  for (let i = 0; i < s.length; i++) {
    a.set(s[i], i);
    for(let j = i + 1; j < s.length; j ++) {
      if(a.has(s[j])) {
        break;
      }
      a.set(s[j], i)
    }
    number = Math.max(number, a.size);
    a.clear();
  }
  number = Math.max(number, a.size);
  return number;
};
input.forEach(i => {
  log(lengthOfLongestSubstring(i))
})


