/**
 * Say you have an array for which the i^th element is the price of a given stock on day i.
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
 * However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxPro = 0
  let minPrice = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < prices.length - 1; i++) {
    maxPro += prices[i + 1] - prices[i] > 0 ? prices[i + 1] - prices[i] : 0
  }
  console.log(maxPro)
};

maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([7, 6, 4, 3, 1])
maxProfit([3, 9, 1, 4, 5, 6])