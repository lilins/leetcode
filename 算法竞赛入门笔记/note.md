# 算法竞赛入门笔记

## 目录

* [数据结构](#数据结构)
  * [队列](#队列（queue）)
  * [栈](#栈（stack）)
  * [二叉树](#二叉树（BinaryTree）)
* [算法](#算法)
  * [枚举法](#枚举法)

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

### 二叉树

* 根节点，左子树、右子树组成
* 遍历
  * 宽（广）度优先（Breadth-First Search, BFS）
  * 深度优先（Depth-First Search, DFS）
    * [先序遍历DLR](#示例：先序遍历)
    * [中序遍历LDR](#示例：中序遍历)
    * [后序遍历LRD](#示例：后序遍历)
* [二叉搜索（排序）树](#示例：二叉搜索树)
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
      node.left ? s1.push(node.left) : 0
      node.right ? s1.push(node.right) : 0
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

