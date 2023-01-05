// 2. Add Two Numbers
// Medium
// 23.6K
// 4.5K
// Companies

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

//

// Constraints:

//     The number of nodes in each linked list is in the range [1, 100].
//     0 <= Node.val <= 9
//     It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

import LinkedList from "./LinkedList.js";
import ListNode from "./LinkedListNode.js";
const myLL1 = new LinkedList();
myLL1.append(9);
myLL1.append(8);
myLL1.append(7);
myLL1.append(6);
myLL1.append(9);

const myLL2 = new LinkedList();
myLL2.append(5);
myLL2.append(4);
myLL2.append(3);

var addTwoNumbers = function (l1, l2) {
  // calculate length of both LL
  let lenLLOne = 0,
    lenLLTwo = 0,
    ptr1 = l1,
    ptr2 = l2;

  while (ptr1 !== null) {
    lenLLOne += 1;
    ptr1 = ptr1.next;
  }
  while (ptr2 !== null) {
    lenLLTwo += 1;
    ptr2 = ptr2.next;
  }

  let ptrCurr1 = null,
    ptrPrev1 = null,
    ptrCurr2 = null;

  if (lenLLOne >= lenLLTwo) {
    ptrCurr1 = l1;
    ptrPrev1 = l1;
    ptrCurr2 = l2;
  } else {
    ptrCurr1 = l2;
    ptrPrev1 = l2;
    ptrCurr2 = l1;
  }

  let sum = ptrCurr1.val + ptrCurr2.val;
  let currentData = parseInt(sum % 10);
  ptrCurr1.val = currentData;
  let carry = parseInt(sum / 10);

  ptrCurr1 = ptrCurr1.next;
  ptrCurr2 = ptrCurr2.next;

  while (ptrCurr1 !== null) {
    let numberOne = ptrCurr1.val;
    let numberTwo = 0;
    if (ptrCurr2 !== null) {
      numberTwo = ptrCurr2.val;
    }
    let sum = numberOne + numberTwo + carry;
    ptrCurr1.val = parseInt(sum % 10);
    carry = parseInt(sum / 10);

    ptrPrev1 = ptrCurr1;
    ptrCurr1 = ptrCurr1.next;
    if (ptrCurr2 !== null) {
      ptrCurr2 = ptrCurr2.next;
    }
    console.log("ptr1", ptr1);
    console.log("ptr2", ptr2);
  }

  if (carry !== 0) {
    const newNode = new ListNode(carry);

    ptrPrev1.next = newNode;
  }

  return lenLLOne >= lenLLTwo ? l1 : l2;
};

addTwoNumbers(myLL1.getHead(), myLL2.getHead());
myLL1.print();
