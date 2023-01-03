// Add 1 to a number represented as linked list GFG
// EasyAccuracy: 31.91%Submissions: 134K+Points: 2
// Lamp
// Stand out from the crowd. Prepare with Complete Interview Preparation

// A number N is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

// Example 1:

// Input:
// LinkedList: 4->5->6
// Output: 457

// Example 2:

// Input:
// LinkedList: 1->2->3
// Output: 124

// Your Task:
// Your task is to complete the function addOne() which takes the head of the linked list as the only argument and returns the head of the modified linked list. The driver code prints the number.
// Note: The head represents the left-most digit of the number.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 <= N <= 101000
/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
  reverse(head) {
    // reversing the linked list
    let prevP = null,
      currP = head,
      nextP = null;

    while (currP !== null) {
      // store the next reference
      nextP = currP.next;
      // destroy next reference in current
      currP.next = prevP;

      //update prevP and currP by 1
      prevP = currP;
      currP = nextP;
    }
    let reverseHead = prevP;
    return reverseHead;
  }
  addOne(node) {
    //your code here

    //reverse the LL
    const reverseHead = this.reverse(node);

    // traverse the list
    let currP = reverseHead,
      prevP = reverseHead;

    let sum = currP.data + 1;
    currP.data = parseInt(sum % 10);
    let carry = parseInt(sum / 10);

    currP = currP.next;

    while (currP !== null) {
      sum = currP.data + carry;
      currP.data = parseInt(sum % 10);
      carry = parseInt(sum / 10);
      prevP = currP;
      currP = currP.next;
    }

    if (carry !== 0) {
      // last node data was 9
      prevP.next = new Node(carry);
    }

    // reverse the list again
    let secondReverseHead = this.reverse(reverseHead);

    return secondReverseHead;
  }
}
