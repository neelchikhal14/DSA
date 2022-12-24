// Find length of Loop - GFG
// Given a linked list of size N. The task is to complete the function countNodesinLoop() that checks whether a given Linked List
// contains a loop or not and if the loop is present then return the count of nodes in a loop or else return 0. C is the position of
// Example 1:

// Input:
// N = 10
// value[]={25,14,19,33,10,21,39,90,58,45}
// C = 4
// Output: 7
// Explanation: The loop is 45->33. So
// length of loop is 33->10->21->39->
// 90->58->45 = 7. The number 33 is
// connected to the last node to form the
// loop because according to the input the
// 4th node from the beginning(1 based
// index) will be connected to the last
// node for the loop.

// Example 2:

// Input:
// N = 2
// value[] = {1,0}
// C = 1
// Output: 2
// Explanation: The length of the loop
// is 2.

// Your Task:
// The task is to complete the function countNodesinLoop() which contains the only argument as reference to head of linked list and return the length of the loop ( 0 if there is no loop).

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// Constraints:
// 1 <= N <= 500
// 0 <= C <= N-1the node to which the last node is connected. If it is 0 then no loop.

//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function loopHere(head, tail, position) {
  if (position === 0) return;
  let walk = head;
  for (let i = 1; i < position; i++) walk = walk.next;
  tail.next = walk;
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let input_ar1 = readLine()
      .split(' ')
      .map((x) => parseInt(x));
    let head = new Node(input_ar1[0]);
    let tail = head;
    for (let i = 1; i < n; i++) {
      tail.next = new Node(input_ar1[i]);
      tail = tail.next;
    }
    let pos = parseInt(readLine());
    loopHere(head, tail, pos);
    let obj = new Solution();
    console.log(obj.countNodesinLoop(head));
  }
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  //Function to find the length of a loop in the linked list.
  countNodesinLoop(head) {
    //your code here

    let fastPtr = head,
      slowPtr = head,
      idx = 0;

    while (fastPtr && fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;

      if (slowPtr === fastPtr) {
        fastPtr = fastPtr.next;
        while (fastPtr !== slowPtr) {
          idx += 1;
          fastPtr = fastPtr.next;
        }
        idx += 1;
        break;
      }
    }
    return idx;
  }
}
