var common = require('./common.js')
log = common.log;

/**
 * 
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
const create = () => {
  const s1 = [0,1]
  const s2 = [0,1,2]
  let l1, l2, currentNode;
  s1.forEach(i => {
    if (currentNode) {
      currentNode.next = new ListNode(i);
      currentNode = currentNode.next;
    } else {
      l1 = new ListNode(i);
      currentNode = l1;
    }
  })
  currentNode = null;
  s2.forEach(i => {
    if (currentNode) {
      currentNode.next = new ListNode(i);
      currentNode = currentNode.next;
    } else {
      l2 = new ListNode(i);
      currentNode = l2;
    }
  })
  return { l1, l2 }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let currentNode1 = l1, currentNode2 = l2;
  let accumulator = 0;
  let result, currentNodeR;
  if(!l1 && !l2) {
    return new ListNode();
  } 
  while (currentNode1 || currentNode2 || accumulator) {
    const sum = ((currentNode1 && currentNode1.val || 0) + (currentNode2 && currentNode2.val || 0) + accumulator);
    accumulator = Math.floor(sum / 10);
    if(currentNodeR) {
      currentNodeR.next = new ListNode(sum % 10);
      currentNodeR = currentNodeR.next;
    } else {
      result = new ListNode(sum % 10);
      currentNodeR = result;
    }
    currentNode1 = currentNode1 && currentNode1.next || null;
    currentNode2 = currentNode2 && currentNode2.next || null;
  }
  return result;
};

const { l1, l2 } = create();
console.log(JSON.stringify(addTwoNumbers(l1, l2)));