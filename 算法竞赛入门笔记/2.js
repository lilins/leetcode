/**开灯问题 */

const light = (n, k) => {
  let count = []
  for (let i = 0; i < n; i++) {
    count[i] = 0
    for (let j = 0; j < k; j++) {
      count[i] = (i + 1) % (j + 1) === 0 ? 1 - count[i] : count[i]
      // console.log(i, count[i])
    }
    if (count[i] === 1) { console.log(i + 1) }
  }
}

// light(7, 3)

console.log(main(5))