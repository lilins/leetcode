/**
 * Your country has an infinite number of lakes.
 * Initially, all the lakes are empty, but when it rains over the nth lake, the nth lake becomes full of water.
 * If it rains over a lake which is full of water, there will be a flood.
 * Your goal is to avoid the flood in any lake.
 * 
 * Given an integer array rains where:
 * 
 * rains[i] > 0 means there will be rains over the rains[i] lake.
 * rains[i] == 0 means there are no rains this day and you can choose one lake this day and dry it.
 * 
 * Return an array ans where:
 * ans.length == rains.length
 * ans[i] == -1 if rains[i] > 0.
 * ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.
 * If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array.
 * 
 * 
 * Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty lake, nothing changes. (see example 4)
 * 
 * Example 1:
 * Input: rains = [1,2,3,4]
 * Output: [-1,-1,-1,-1]
 * Explanation: After the first day full lakes are [1]
 * After the second day full lakes are [1,2]
 * After the third day full lakes are [1,2,3]
 * After the fourth day full lakes are [1,2,3,4]
 * There's no day to dry any lake and there is no flood in any lake.
 * 
 * Example 2:
 * Input: rains = [1,2,0,0,2,1]
 * Output: [-1,-1,2,1,-1,-1]
 * Explanation: After the first day full lakes are [1]
 * After the second day full lakes are [1,2]
 * After the third day, we dry lake 2. Full lakes are [1]
 * After the fourth day, we dry lake 1. There is no full lakes.
 * After the fifth day, full lakes are [2].
 * After the sixth day, full lakes are [1,2].
 * It is easy that this scenario is flood-free. [-1,-1,1,2,-1,-1] is another acceptable scenario.
 * 
 * Example 3:
 * Input: rains = [1,2,0,1,2]
 * Output: []
 * Explanation: After the second day, full lakes are  [1,2]. We have to dry one lake in the third day.
 * After that, it will rain over lakes [1,2]. It's easy to prove that no matter which lake you choose to dry in the 3rd day, the other one will flood.
 * 
 * Example 4:
 * Input: rains = [69,0,0,0,69]
 * Output: [-1,69,1,1,-1]
 * Explanation: Any solution on one of the forms [-1,69,x,y,-1], [-1,x,69,y,-1] or [-1,x,y,69,-1] is acceptable where 1 <= x,y <= 10^9
 * 
 * Example 5:
 * Input: rains = [10,20,20]
 * Output: []
 * Explanation: It will rain over lake 20 two consecutive days. There is no chance to dry any lake
 * 
 *  Constraints:
 * 1 <= rains.length <= 10^5
 * 0 <= rains[i] <= 10^9
 */
const { log, slog } = require('./common.js');
/**
 * @param {number[]} rains
 * @return {number[]}
 */

const rains = [
  // [1, 2, 3, 4],
  // [1, 2, 0, 0, 2, 1],
  // [1, 2, 0, 1, 2],
  // [69, 0, 0, 0, 69, 0],
  // [10, 20, 20],
  // [1, 2, 0, 1, 0, 0, 0, 2, 3, 45, 0],
  // [10, 11, 12, 13, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 1, 10, 0, 2, 11, 0, 3, 12, 0, 4, 13],
  // [1, 0, 2, 0, 0, 2, 1],
  // [1, 0, 2, 0],
  // [1, 2, 0, 2, 3, 0, 1],
  // [0, 1, 3, 0, 2, 0, 1, 2]
  // [3, 2, 1, 0, 0, 2, 1, 0, 4, 3],
  [24526, 23938, 93949, 0, 61370, 0, 0, 80971, 0, 0, 0, 55547, 0, 80482, 74942, 77698, 54795, 0, 0, 0, 0, 77698, 0, 0, 54410, 0, 0, 23938, 0, 0, 0, 0, 0, 0, 75018, 0, 0, 47564, 0, 24526, 0, 0, 0, 48639, 0, 68554, 39045, 75357, 48639, 6992, 0, 47564, 54410, 0, 0, 0, 74942, 6992, 40783, 82220, 0, 75018, 0, 61370, 0, 0, 68554, 0, 0, 82220, 0, 40783, 55547, 80971, 0, 93949, 87360, 0, 87360, 39045, 0, 80482, 75357, 0, 0, 54795]
];
const results = [
  [-1, -1, -1, 23938, -1, 24526, 61370, -1, 80971, 93949, 1, -1, 55547, -1, -1, -1, -1, 77698, 74942, 80482, 54795, -1, 1, 1, -1, 54410, 1, -1, 1, 1, 1, 1, 1, 1, -1, 75018, 1, -1, 47564, -1, 1, 1, 1, -1, 48639, -1, -1, -1, -1, -1, 6992, -1, -1, 68554, 39045, 75357, -1, -1, -1, -1, 82220, -1, 40783, -1, 1, 1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, 87360, -1, -1, 1, -1, -1, 1, 1, -1]
]
var avoidFlood = function (rains) {
  var ans = [];
  const rainDay = []
  let temp = new Set();
  let prev = -1;
  for (var i = 0; i < rains.length; i++) {
    if (rains[i] !== 0 && temp.has && temp.has(rains[i])) {
      return []
    }
    if ((rains[i] !== 0 && prev === 0) || (rains[i] === 0 && prev !== 0)) {
      rainDay.push(temp);
      if (prev === 0) {
        temp = new Set();
      } else {
        temp = [];
      }
    }
    temp.add && temp.add(rains[i])
    temp.push && temp.push(rains[i]);
    prev = rains[i];
  }
  rainDay.push(temp)
  if (rainDay.length < 3) {
    return Array(rains.length).fill(-1)
  }
  let rainDaySize = rainDay[0].size;
  let rainDaySize2;
  while (rainDay.length >= 3) {
    let dryLake = [];
    rainDaySize2 = rainDay[2].size;
    for (let item of rainDay[0]) {
      if (rainDay[2].has(item)) {
        dryLake.push(item);
        rainDay[0].delete(item)
      }
    }
    console.log(dryLake, rainDay[0])
    if (dryLake.length > rainDay[1].length) {
      return [];
    } else if (dryLake.length === rainDay[1].length) {
    } else {
      let index1 = 3;
      while (rainDay[0].size > 1 && rainDay[index1] && dryLake.length < rainDay[1].length) {
        for (let item of rainDay[0]) {
          if (rainDay[index1] === undefined || rainDay[index1] instanceof Array) {
            index1++;
            break;
          }
          if (rainDay[index1].has(item)) {
            dryLake.push(item);
            rainDay[0].delete(item)
          }
          index1++;
        }
      }
      console.log(dryLake)
      if (dryLake.length < rainDay[1].length) {
        dryLake = dryLake.concat(Array(rainDay[1].length - dryLake.length).fill(1))
      }
    }
    rainDay[0] = rainDay[0].add(...rainDay[2].values())
    console.log('rainDay0', rainDay[0])
    ans = ans.concat(Array(rainDaySize).fill(-1)).concat(dryLake);
    rainDaySize = rainDay[2].size;

    rainDay.splice(1, 2);
    if (rainDay.length < 3) {
      ans = ans.concat(Array(rainDaySize2).fill(-1));
    }
    console.log('ans', ans)
  }
  // console.log(ans.length, rains.length, rainDaySize2)
  if (ans.length < rains.length) {
    ans = ans.concat(Array(rains.length - ans.length).fill(1));
  }
  return ans;
};
var avoidFlood2 = function (rains) {
  const sunDays = [];
  const lastRain = new Map();
  const ans = Array(rains.length).fill(-1);
  let index = 0;
  while (rains[index] !== undefined) {
    if (rains[index] === 0) {
      ans[index] = 1;
      sunDays.push(index);
    } else {
      if (lastRain.has(rains[index])) {
        const lastDay = lastRain.get(rains[index]);
        let findDay = false;
        for (let i = 0; i < sunDays.length; i++) {
          if (sunDays[i] > lastDay) {
            ans[sunDays[i]] = rains[index];
            lastRain.set(rains[index], index);
            sunDays.splice(i, 1);
            findDay = true
            break;
          }
        }
        if (!findDay) {
          return []
        }
      } else {
        lastRain.set(rains[index], index);
      }
    }
    index++;
  }
  console.log(ans)
  return ans;
};
rains.forEach(i => {
  slog('=====')
  // slog(i)
  console.log('result', avoidFlood2(i))
  console.log(results[i])
})
