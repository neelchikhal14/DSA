// Given a linked list of 0s, 1s and 2s, sort it. GFG
// EasyAccuracy: 60.75%Submissions: 97K+Points: 2
// Lamp
// Stand out from the crowd. Prepare with Complete Interview Preparation

// Given a linked list of N nodes where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to head side, 2s at the end of the linked list, and 1s in the mid of 0s and 2s.

// Example 1:

// Input:
// N = 8
// value[] = {1,2,2,1,2,0,2,2}
// Output: 0 1 1 2 2 2 2 2
// Explanation: All the 0s are segregated
// to the left end of the linked list,
// 2s to the right end of the list, and
// 1s in between.

// Example 2:

// Input:
// N = 4
// value[] = {2,2,0,1}
// Output: 0 1 2 2
// Explanation: After arranging all the
// 0s,1s and 2s in the given format,
// the output will be 0 1 2 2.

// Your Task:
// The task is to complete the function segregate() which segregates the nodes in the linked list as asked in the problem statement and returns the head of the modified linked list. The printing is done automatically by the driver code.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N).

// Constraints:
// 1 <= N <= 103

/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

// ? Reference - https://www.youtube.com/watch?v=ogmBt6f9hw8

class Solution {
  //Function to sort a linked list of 0s, 1s and 2s.
  segregate(head) {
    //your code here
    let zerosHead = new Node(-1);
    let zerosTail = zerosHead;

    let onesHead = new Node(-1);
    let onesTail = onesHead;

    let twosHead = new Node(-1);
    let twosTail = twosHead;

    let current = head;

    while (current !== null) {
      if (current.data === 0) {
        zerosTail.next = current;
        zerosTail = current;
      } else if (current.data === 1) {
        onesTail.next = current;
        onesTail = current;
      } else {
        twosTail.next = current;
        twosTail = current;
      }
      current = current.next;
    }

    // merge three lists
    if (onesHead.next !== null) {
      zerosTail.next = onesHead.next;
    } else {
      zerosTail.next = twosHead.next;
    }
    onesTail.next = twosHead.next;
    twosTail.next = null;

    return zerosHead.next;
  }
}
