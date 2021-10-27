/**
 * 5. Longest Palindromic Substring
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Example 1:
 * Input: "babad"
 * Output: "bab"
 * 
 * Note: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: "cbbd"
 * Output: "bb"
 */
const { log, slog } = require('./common.js');

const input = [
  'aaaa',
  // 'bbbbbb',
  // 'pwwkew',
  // 'tepdadas',
  // ' ',
  // ' 1 ',
  // 'dvdf',
  // 'qvcqwes'
]
/**
* @param {string} s
* @return {string}
*/
var longestPalindrome = function (s) {
  let string = '';
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    function check(s, left, right) {
      let resultStr = '';
      let j = 0;
      console.log('check', s, left, right)
      if (resultStr.length < 2) {
        resultStr = s.slice(left, right);
      }
      while (left >= 0 && right <= s.length - 1){
        console.log(j, left, right, resultStr)
        if (s[left] === s[right] && string.length < j * 2 + 2) {
          resultStr = s.slice(left, right);
        } else {
          break;
        }
        j++;
        left =- j;
        right =+ j;
      } 
      return resultStr;
    }
    let result = '';
    console.log(char, i)
    if (i > 0 && char === s[i - 1]) {
      result = check(s, i - 1, i);
      console.log(result);
    } else if (i > 1 && char === s[i - 2]) {
      result = check(s, i - 1, i + 1);
    }
    if (result.length > string.length) string = result;
    if (string.length / 2 > s.length - i) {
      break;
    }
  }
  return string;
};
input.forEach(i => {
  log(longestPalindrome(i))
})