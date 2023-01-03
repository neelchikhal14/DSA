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
  let palindromeResult = true;

  // only one node or empty LL
  if (head === null || head.next === null) return true;

  // Step-1 find middle of linked list
  let slowPtr = head,
    fastPtr = head;
  while (fastPtr && fastPtr.next && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  // Step-2 reverse the right half
  let tempCurr = slowPtr,
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

  // change the head
  let reverseHead = tempPrev;

  // Step-3 Move slow to right half

  // Ste-4 compare left and right half of linked list
  while (reverseHead !== null) {
    if (head.val !== reverseHead.val) return false;

    // increase head
    head = head.next;
    // increase slowPtr
    reverseHead = reverseHead.next;
  }

  return palindromeResult;
};
