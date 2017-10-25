/**
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

 * Definition for an interval.
 * */
function Interval (start, end) {
  this.start = start;
  this.end = end;
}
/*
* @param {Interval[]} intervals
* @param {Interval} newInterval
* @return {Interval[]}
*/
var insert = function (intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => {
    return a.start - b.start
  })
  for (let i = 0; i < intervals.length - 1;) {
    if (intervals[i].end >= intervals[i + 1].start) {
      let temp = new Interval(intervals[i].start, Math.max(intervals[i].end, intervals[i + 1].end))
      intervals.splice(i, 2, temp)
    } else {
      i++
    }
  }
  console.log(intervals)
  return (intervals)
};

const arrayToInterval = function (data) {
  let newData = []
  Array.prototype.forEach.call(data, item => {
    newData.push(new Interval(item[0], item[1]))
  })
  return newData
}

insert(
  arrayToInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]),
  arrayToInterval([[4, 9]])
)