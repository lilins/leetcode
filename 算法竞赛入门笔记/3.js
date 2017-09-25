/**
 * 6.3.1 小球下落
 */

const main = (depth, nums) => {
  let s = []
  let k = 1
  let n = Math.pow(2,depth)-1
  for (let i = 0; i < nums; i++) {
    k = 1
    while (1) {
      s[k] = s[k] != undefined ? !s[k] : true
      k = s[k] ? k * 2 : k * 2 + 1
      if (k > n) break
    }
  }
  console.log(k / 2)
}

const main2 = (depth, nums) => {
  let k = 1
  for (let i = 0; i < depth - 1; i++) {
    if(nums%2){
      k = k*2
      nums = (nums+1)/2
    }else{
      k = k*2+1
      nums /= 2
    }
  }
  console.log(k)
}

/**
 * 层次遍历
 */

let node = () => ({
  value: null,
  left: null,
  right: null
})

const pos = {
  L: 'left',
  R: 'right'
}

const addNode = (tree, value, s) => {
  let current = tree
  for(let i=0;i<s.length;i++){
    const position = pos[s[i]]
    if(current[position] === null){
      current[position] = node()
    }
    current = current[position]
  }
  current.value = value
  return tree
}

const printTree = (tree) => {
  let q = [tree]
  let result = []
  while(q.length !== 0){
    let tempNode = q.shift()
    if(tempNode === null ){
      break
    }
    result.push(tempNode.value)
    tempNode.left ? q.push(tempNode.left) : 0
    tempNode.right ? q.push(tempNode.right) : 0
  }
  return result
}

const main3 = () => {
  let tree = node()
  const input = [
    {value: 11, pos: 'LL'},
    {value: 7, pos: 'LLL'},
    {value: 8, pos: 'R'},
    {value: 5, pos: ''},
    {value: 4, pos: 'L'},
    {value: 13, pos: 'RL'},
    {value: 2, pos: 'LLR'},
    {value: 1, pos: 'RRR'},
    {value: 4, pos: 'RR'}
  ]
  input.forEach(item=>{
    tree = addNode(tree, item.value, item.pos)
  })
  console.log(JSON.stringify(tree, null, 2))
  console.log(printTree(tree))
}

main3()