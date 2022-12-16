//GFG
/**
 * Floor in a Sorted Array
EasyAccuracy: 47.96%Submissions: 75868Points: 2

Given a sorted array arr[] of size N without duplicates, and given a value x. Floor of x is defined as the largest element K in arr[] such that K is smaller than or equal to x. Find the index of K(0-based indexing).

Example 1:

Input:
N = 7, x = 0 
arr[] = {1,2,8,10,11,12,19}
Output: -1
Explanation: No element less 
than 0 is found. So output 
is "-1".

Example 2:

Input:
N = 7, x = 5 
arr[] = {1,2,8,10,11,12,19}
Output: 1
Explanation: Largest Number less than 5 is
2 (i.e K = 2), whose index is 1(0-based 
indexing).

Your Task:
The task is to complete the function findFloor() which returns an integer denoting the index value of K or return -1 if there isn't any such number.

Expected Time Complexity: O(log N).
Expected Auxiliary Space: O(1).

Constraints:
1 ≤ N ≤ 107
1 ≤ arr[i] ≤ 1018
0 ≤ X ≤ arr[n-1]

 */

function findFloor(arr, target) {
  //your code here
  if (target < arr[0]) return -1;
  let start = 0,
    end = arr.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  if (target === arr[mid]) return mid;
  while (start < end) {
    if (target > arr[mid]) start = mid + 1;
    else end = mid;
    mid = Math.floor(start + (end - start) / 2);
  }
  return arr[start - 1];
}
console.log(findFloor([1, 2, 8, 10, 11, 12, 19], 500));
