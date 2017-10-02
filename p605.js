/**
 * Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True
Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: False
Note:
The input array won't violate no-adjacent-flowers rule.
The input array size is in the range of [1, 20000].
n is a non-negative integer which won't exceed the input array size.
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0
  let zeroSum = 0
  flowerbed.unshift(0)
  for(let i=0;i<flowerbed.length;i++){
    if(flowerbed[i] === 0){
      zeroSum ++
    }else{
      count += zeroSum != 2 ? Math.floor((zeroSum+1)/3) : 0
      zeroSum = 0
    }
    console.log(flowerbed)
  }
  count += Math.floor((zeroSum)/2)
  if(flowerbed.length === 2&&flowerbed[1] === 0){
    count = 1
  }
  console.log(count)
  return count >= n
};

console.log(canPlaceFlowers([0,1,0,0,1],1))
