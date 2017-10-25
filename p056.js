/**
 * Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

function Interval (start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
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
};

let testData = []
Array.prototype.forEach.call([[1, 3], [8, 10], [2, 8], [15, 18]], item => {
  testData.push(new Interval(item[0], item[1]))
})
merge(testData)