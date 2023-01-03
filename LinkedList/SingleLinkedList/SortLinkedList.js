// 148. Sort List
// Medium
// 8.9K
// 273
// Companies

// Given the head of a linked list, return the list after sorting it in ascending order.

//

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:

// Input: head = []
// Output: []

//

// Constraints:

//     The number of nodes in the list is in the range [0, 5 * 104].
//     -105 <= Node.val <= 105

//

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function getMid(head) {
  // will split the LL at middle and retuurn right half
  // last node of left half is set to zero
  let slowPtr = head,
    fastPtr = head;
  mid = null;
  while (fastPtr !== null && fastPtr.next !== null) {
    mid = slowPtr;
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }
  let secondHalf = mid.next;
  // disconnect original LL
  mid.next = null;
  return secondHalf;
}

function mergeList(left, right) {
  //   if (left.next === null) return right;
  //   if (right.next === null) return left;
  let dummy = new ListNode(-1);
  let current = dummy;

  while (left !== null && right !== null) {
    if (left.val <= right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }
  if (left !== null) current.next = left;
  if (right !== null) current.next = right;

  return dummy.next;
}
var sortList = function (head) {
  if (head === null || head.next === null) return head;

  //split  list in half

  let mid = getMid(head);
  let left = sortList(head);
  let right = sortList(mid);
  return mergeList(left, right);
};
