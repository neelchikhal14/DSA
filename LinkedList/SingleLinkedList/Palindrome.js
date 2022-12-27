// 234. Palindrome Linked List
// Easy
// 12.7K
// 706
// Companies

// Given the head of a singly linked list, return true if it is a
// palindrome
// or false otherwise.

//

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false

//

// Constraints:

//     The number of nodes in the list is in the range [1, 105].
//     0 <= Node.val <= 9

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // only one node or empty LL
  if (head === null || head.next === null) return true;

  //find middle of linked list
  let slowPtr = head,
    fastPtr = head;
  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  // reverse the right half
  
};
