# 算法竞赛入门笔记

## 目录

* [数据结构](#数据结构)
  * [队列](#队列queue)
  * [栈](#栈stack)
  * [二叉树](#二叉树BinaryTree)
* [算法](#算法)
  * [枚举法](#枚举法)
  * [枚举排列](#枚举排列)
  * [枚举组合](#枚举组合)
  * [回溯法](#回溯法)
  * [贪心法](#贪心法)
  * [动态规划](#动态规划3)
* [排序算法](#排序算法)
  * [冒泡排序](#冒泡排序)
  * [插入排序](#插入排序)
  * [希尔排序](#希尔排序)
  * [简单选择](#简单选择)
  * [堆排序](#堆排序)
  * [归并排序](#归并排序)
  * [快速排序](#快速排序)

## 数据结构

### 队列（queue）

* 先到先出（FIFO）
* front/rear 队首队尾

在js中通过数组实现即可

* `push(i)` 排队尾，返回值为数组长度
* `shift()` 出队，返回值为出队的值
* 通过`shift()`和`pop()`也可以操作

示例

```c
// C
int front = 0
int rear = 1
int Max = 50
int[] = queue[Max]

queue[front] = 1
queue[++rear] = 2

while(front < rear){
  queue[front++]
}
```

```js
// JavaScript
let queue = []

queue.push(1) //[1]
queue.push(2) //[1,2]

queue.shift() //[2]
```

### 栈（stack）

* 后到先出（LIFO）
* stach/top 指向栈顶元素

在js中通过数组实现即可

* `unshift(i)` 压入栈顶，返回值为数组长度
* `shift()` 取出栈顶，返回值为出栈的值
* 通过`push()`和`pop()`也可以操作

示例

```js
let stack = [1,2,3,2,2,3]
while(stack[0]){
  stack.shift()
}
```

### 二叉树（BinaryTree）

* 根节点，左子树、右子树组成
* 宽（广）度优先（Breadth-First Search, BFS）
* 深度优先（Depth-First Search, DFS）
  * [先序遍历DLR](#示例先序遍历)
  * [中序遍历LDR](#示例中序遍历)
  * [后序遍历LRD](#示例后序遍历)
* [二叉搜索（排序）树](#示例二叉搜索树)
* [二叉平衡树](#)

#### 示例：新建节点

```js

const node = (data) => ({
  data: data,
  left: null,
  right: null
})
```

#### 示例：按照宽度优先插入节点，结合队列来实现

```js
const insert = (tree, data) => {
  const n = node(data);
  if (tree == null) {
    tree = n;
  }
  else {
     let queue = [tree]
     let current
     while (queue.length !== 0) {
        current = queue.shift()
        if(current.left == null){
          current.left = n
          break;
        }else if(current.right == null){
          current.right = n
          break;
        }else{
          queue.push(current.left)
          queue.push(current.right)
        }
     }
  }
  return tree
}
```

#### 示例：先序遍历

```js
// 递归
const PreOrderByRecursion = (node) => {
  if (node) {
    console.log(node.data)
    preOrder(node.left)
    preOrder(node.right)
  }
}
// 非递归，结合栈
const PreOrder = (node) => {
  if(!node) {
    console.log('Empty Tree')
  }
  let stack = []
  stack.push(node)
  while(stack.length !== 0) {
    node = stack.pop()
    console.log(node.data)    
    if(node.right) stack.push(node.right)
    if(node.left) stack.push(node.left)
  }
}
```

#### 示例：中序遍历

```js
// 递归
const InOrderByRecursion = (node) => {
  if (node) {
    preOrder(node.left)
    console.log(node.data)
    preOrder(node.right)
  }
}
// 非递归，结合栈
const InOrder = (node) => {
  if(!node) {
    console.log('Empty Tree')
  }
  let stack = []
  while(stack.length !== 0 || node) {
    if(node){
      stack.push(node)
      node = node.left
    }else{
      node = stack.pop()
      console.log(node.data)
      node = node.right
    }
  }
}
```

#### 示例：后序遍历

```js
// 递归
const PostOrderByRecursion = (node) => {
  if (node) {
    preOrder(node.left)
    preOrder(node.right)
    console.log(node.data)
  }
}
// 非递归，结合栈
const PostOrder = (node) => {
  if(!node) {
    console.log('Empty Tree')
  }else{
    var s1 = []
    var s2 = []
    s1.push(node)
    while(s1.length !== 0) {
      node = s1.pop()
      s2.push(node)
      if(node.left){
        s1.push(node.left)
      }
      if(node.right){
        s1.push(node.right)
      }
    }
    while(s2.length !== 0) {
      console.log(s2.pop().value);
    }
  }
}
```

#### 示例：实验

```js
let tree = null
const data = ['A','B','C','D','E','F','G','H','I']
for(let i=0;i<data.length;i++){
  tree = insert2(tree, data[i])
}

console.log(JSON.stringify(tree, null, 2))
```

#### 示例：二叉搜索树

```js
const insertBST = (tree, data) => {
  const n = node(data);
  if (tree == null) {
    tree = n;
  } else {
     let current = tree
     while (1) {
        if(data < current.data){
          if(current.left === null){
            current.left = n
            break;
          }
          current = current.left;
        }else{
          if(current.right === null){
            current.right = n
            break;
          }
          current = current.right;
        }
     }
  }
  return tree
}
```

## 算法

### 枚举法

通过适当的计算进行枚举

### 枚举排列

```js
const permutation = (select, input, arr, current) => {
  if (input === current) {
    console.log(arr)
  } else {
    for (let i = 0; i < input; i++) {
      let ok = 1
      for (let j = 0; j < current; j++) {
        ok = arr[j] === select[i] ? 0 : ok
      }
      if (ok) {
        arr[current] = select[i]
        permutation(select, input, arr, current + 1)
      }
    }
  }
}

const select = ['a','a','b','c']
let set = new Set(select)
permutation(Array.from(set), set.size, [], 0)
```
### 枚举组合

```js
const subset = (set, size, arr, current) => {
  if(current === size){
    console.log(set.filter((item,index)=>{return arr[index]}).splice(0,current))
  }else{
    arr[current] = 1
    subset(set, size, arr, current+1)
    arr[current] = 0
    subset(set, size, arr, current+1)
  }
}

const select = ['a', 'b', 'a', 'c', 'd']
let set = new Set()
select.forEach(item => set.add(item))
subset(Array.from(set), set.size, [], 0)
```

### 回溯法

把问题分成若干步骤并递归求解时，如果当前步骤没有合法选择，则函数返回上一级递归调用。

#### 八皇后问题

```js
const eightQueen = (c, n, current) => {
  if (current === n) {
    tot++
    // console.log(c)
  } else {
    for (let i = 0; i < n; i++) {
      let ok = 1
      c[current] = i
      for (let j = 0; j < current; j++) {
        if (c[current] === c[j] || j - c[j] === current - c[current] || current + c[current] === j + c[j]) {
          ok = 0
          break
        }
      }
      if (ok) {
        eightQueen(c, n, current + 1)
      }
    }
  }
}

const n = 8
let c = []
for (let i = 0; i < n; i++) {
  c[i] = []
  for (let j = 0; j < n; j++) {
    c[i][j] = i + j
  }
}

eightQueen(c, n, tot, 0)
console.log(tot)
```

#### 素数环

输入正整数 n，把整数 1,2,3,...,n 组成一个环，使得相邻两个整数之和均为素数。

输出时从整数 1 开始逆时针排列。同一个环应恰好输出一次。 n <= 16

```js
const is_prime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0 && n != i) {
      return false
    }
  }
  return true
}

const dfs = (isp, n, arr, vis, current) => {
  if(current === n&&isp[arr[0]+arr[current-1]]){
    console.log(arr)
  }else{
    for(let i=2;i<=n;i++){
      if(isp[arr[current-1]+i]&&vis[i]){
        arr[current] = i
        vis[i] = 0
        dfs(isp, n, arr, vis, current+1)
        vis[i] = 1
      }
    }
  }
}

const isPrime = (n) => {
  let isp = []
  for (let i = 2; i < n * 2; i++) {
    isp[i] = is_prime(i)
  }
  return isp
}

const vision = (n) => {
  let vis = [0]
  for (let i = 2; i <= n ; i++) {
    vis[i] = 1
  }
  return vis
}

const main = () => {
  let n = 16
  let isp = isPrime(n)
  let vis = vision(n)
  dfs(isp, n, [1],vis, 1)
}

main()
```

#### 困难的串

如果一个字符串包含两个相邻的重复子串，则称“容易的串”，其他称为“困难的串”。

* 容易的串：BB,ABCDACABCAB
* 困难的串：D,DC,ABDAB,CBABCBA

输入正整数 n 和 l，输出由前 l 个字符组成、字典序第 k 小的困难的串。

例如：

* 输入

7, 3  
30, 3

* 输出

ABACABA  
ABACABCACBABCABACABCACBACABA

```js
const dfs = (select, l, n, arr, current) => {
  if (current === n) {
    console.log(arr)
    return 0
  }
  for (let i = 0; i < l; i++) {
    arr[current] = select[i]
    let ok = 1
    for (let j = 1; j * 2 <= current + 1; j++) {
      let equal = 1
      for (let k = 0; k < j; k++) {
        if (arr[current - k] !== arr[current - k - j]) {
          equal = 0
          break
        }
      }
      if (equal) {
        ok = 0
        break
      }
    }
    if (ok) {
      if (!dfs(select, l, n, arr, current + 1)) {
        return 0
      }
    }
  }
  return 1
}

dfs(['A','B','C'], 3, 7, [], 0)
```
### 贪心法



## 排序算法


| 名称            | 平均情况                      | 最好              |最坏                |辅助空间         |稳定性
| :--------      | :--------                    | :--               |:--                |:--             |:--        
| 冒泡排序         | O(n<sup>2</sup>)             |O(n)              |O(n<sup>2</sup>)   |O(1)            |稳定
| 插入排序         | O(n<sup>2</sup>)             |O(n)              |O(n<sup>2</sup>)   |O(1)            |稳定
| 希尔排序         | O(n log n)~O(n<sup>2</sup>)  |O(n<sup>1.3</sup>)|O(n<sup>2</sup>)   |O(1)            |不稳定
| 简单选择排序     | O(n<sup>2</sup>)              |O(n<sup>2</sup>)  |O(n<sup>2</sup>)   |O(1)            |稳定
| 堆排序          | O(n log n)                    |O(n log n)        |O(n log n)         |O(1)            |不稳定
| 归并排序        | O(n log n)                    |O(n log n)         |O(n log n)         |O(n)            |稳定
| 快速排序        | O(n log n)                    |O(n log n)         |O(n<sup>2</sup>)   |O(log n)~O(n)   |不稳定

### 冒泡排序

* 冒泡排序时间复杂度最好的情况为O(n)，最坏的情况是O(n^2)
* 基本思想是：两两比较相邻记录的关键字，如果反序则交换 

```js
const bubbleSort = (arr) => {
  let flag = arr.length
  while (flag > 0) {
    let k = flag
    flag = 0
    for (j = 1; j < k; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        flag = j
      }
    }
    console.log(k, flag)
  }
  return arr
}
```

### 插入排序

* 插入排序：将一个记录插入到已经排好序的有序表中，从而得到一个新的，记录数增 1 的有序表
* 时间复杂度也为O(n^2)，比冒泡法和选择排序的性能要更好一些

```js
const InsertionSort = (arr) => {
  let temp, j
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i]
    for (j = i; j > 0 && temp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = temp
  }
  return arr
}
```

### 希尔排序

* 先将整个待排元素序列分割成若干子序列（由相隔某个“增量”的元素组成的）分别进行直接插入排序，然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，再对全体元素进行一次直接插入排序（增量为1）。
* 其时间复杂度为O(n^3/2),要好于直接插入排序的O(n^2)

```js
const ShellSort = (arr) => {
  for (let step =  Math.floor(arr.length / 2); step > 0; step = Math.floor(step / 2)) {
    let j
    for (let i = step; i < arr.length; i++) {
      let temp = arr[i]
      for (j = i - step; j >= 0 && arr[j] > temp; j -= step) {
        arr[j + step] = arr[j]
      }
      arr[j + step] = temp
    }
  }
  return arr
}
```

### 简单选择

* 简单选择排序(simple selection sort) 就是通过 n-i 次关键字之间的比较,从 n-i+1 个记录中选择关键字最小的记录,并和第i(1<=i<=n)个记录交换之
* 尽管与冒泡排序同为O(n^2),但简单选择排序的性能要略优于冒泡排序

```js
const selectSort = (arr) => {
  let minIndex, sum = 0
  for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
```

### 堆排序

* 将待排序的序列构造成一个大顶堆。此时，整个序列的最大值就是堆顶的根结点。将它移走(其实就是将其与堆数组的末尾元素交换，此时末尾元素就是最大值)，然后将剩余的 n-1 个序列重新构造成一个堆，这样就会得到n个元素的次大值。如此反复执行，便能得到一个有序序列了
* 时间复杂度为 O(nlogn),好于冒泡,简单选择,直接插入的O(n^2)

```js
const heapSort = (arr) => {
  const swap = (array, i, j) => {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  const maxHeapify = (arr, index, num) => {
    console.log(index, arr)
    let iLeft = 2 * index + 1
    let iRight = 2 * (index + 1)
    let iMax = index
    if (iLeft < num && arr[index] < arr[iLeft]) {
      iMax = iLeft
    }
    if (iRight < num && arr[iMax] < arr[iRight]) {
      iMax = iRight
    }
    if (iMax !== index) {
      swap(arr, iMax, index)
      maxHeapify(arr, iMax, num)
    }
  }

  for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
    maxHeapify(arr, i)
  }
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    maxHeapify(arr, 0, i)
  }
  return arr
}
```

### 归并排序

* 假设初始序列含有 n 个记录，则可以看成 n 个有序的子序列，每个子序列的长度为 1，然后两两归并，得到（不小于 n/2 的最小整数）个长度为 2 或 1 的有序子序列，再两两归并，如此重复,直至得到一个长度为 n 的有序序列为止,这种排序方法称为 2 路归并排序
* 时间复杂度为 O(nlogn)，空间复杂度为 O(n+logn)，如果非递归实现归并，则避免了递归时深度为 logn 的栈空间
* 空间复杂度为 O(n)

```js
const mergeSort = (array) => {
  const sort = (array, first, last) => {
    first = first === undefined ? 0 : first
    last = last === undefined ? array.length - 1 : last
    if (last - first < 1) {
      return;
    }
    let middle = Math.floor((first + last) / 2);
    sort(array, first, middle);
    sort(array, middle + 1, last);
    let temp
    while (first <= middle && middle + 1 <= last) {
      if (array[first] >= array[middle + 1]) { // 这里使用了插入排序的思想
        temp = array[middle + 1];
        for (let i = middle; i >= first; i--) {
          array[i + 1] = array[i];
        }
        array[first] = temp;
        middle++
      } else {
        first++
      }
    }
  }
  return sort(array);
}
```

### 快速排序

* 通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。
* 时间复杂度为O(nlogn)

```js
function quickSort(array) {
	// 交换元素位置
	function swap(array, i, k) {
		var temp = array[i];
		array[i] = array[k];
		array[k] = temp;
	}
	// 数组分区，左小右大
	function partition(array, left, right) {
		var storeIndex = left;        
		var pivot = array[right]; // 直接选最右边的元素为基准元素
		for (var i = left; i < right; i++) {
			if (array[i] < pivot) {
				swap(array, storeIndex, i);
				storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
			}
		}
		swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
		return storeIndex;
	}
	function sort(array, left, right) {
		if (left > right) {
			return;
		}
    var storeIndex = partition(array, left, right)
		sort(array, left, storeIndex - 1);
		sort(array, storeIndex + 1, right);
	}
	sort(array, 0, array.length - 1);
	return array;
}
```