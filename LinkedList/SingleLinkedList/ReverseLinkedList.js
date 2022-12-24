// 206. Reverse Linked List
//Given the head of a singly linked list, reverse the list, and return the reversed list.
// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

// Constraints:

//     The number of nodes in the list is the range [0, 5000].
//     -5000 <= Node.val <= 5000

//? HELPER - https://www.youtube.com/watch?v=DT3KOnLWR_o

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  let tempCurr = head,
    tempPrev = null,
    tempNext = null;

  while (tempCurr !== null) {
    // save the next node of current
    tempNext = tempCurr.next;
    // break the original link
    tempCurr.next = tempPrev;
    // move pointers ahead
    tempPrev = tempCurr;
    tempCurr = tempNext;
  }
  head = tempPrev;
  return head;
};
