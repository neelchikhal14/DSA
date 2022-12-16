/**
 * Book Allocation
 * Allocate minimum number of pages
HardAccuracy: 48.87%Submissions: 67766Points: 8
Lamp
This problem is part of GFG SDE Sheet. Click here to view more.  

You are given N number of books. Every ith book has Ai number of pages. The books are arranged in ascending order.

You have to allocate contiguous books to M number of students. There can be many ways or permutations to do so. In each permutation, one of the M students will be allocated the maximum number of pages. Out of all these permutations, the task is to find that particular permutation in which the maximum number of pages allocated to a student is the minimum of those in all the other permutations and print this minimum value.

Each book will be allocated to exactly one student. Each student has to be allocated at least one book.

Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).

 

Example 1:

Input:
N = 4
A[] = {12,34,67,90}
M = 2
Output:113
Explanation:Allocation can be done in 
following ways:{12} and {34, 67, 90} 
Maximum Pages = 191{12, 34} and {67, 90} 
Maximum Pages = 157{12, 34, 67} and {90} 
Maximum Pages =113. Therefore, the minimum 
of these cases is 113, which is selected 
as the output.


Example 2:

Input:
N = 3
A[] = {15,17,20}
M = 2
Output:32
Explanation: Allocation is done as
{15,17} and {20}

Your Task:
You don't need to read input or print anything. Your task is to complete the function findPages() which takes 2 Integers N, and m and an array A[] of length N as input and returns the expected answer.


Expected Time Complexity: O(NlogN)
Expected Auxilliary Space: O(1)


Constraints:
1 <= N <= 105
1 <= A [ i ] <= 106
1 <= M <= 105
 */
function findPages(a, n, m) {
  if (m === 1) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += a[i];
    }
    return sum;
  }
  if (n === m) {
    let findHighest = 0;
    for (let i = 0; i < n; i++) {
      if (a[i] >= findHighest) findHighest = a[i];
    }
    return findHighest;
  }

  if (n < m) return -1;
  //your code here
  function isPossible(arr, n, m, mid) {
    let studentCounter = 1;
    let pageSum = 0;
    for (let i = 0; i < n; i++) {
      if (pageSum + arr[i] <= mid) {
        pageSum += arr[i];
      } else {
        studentCounter += 1;
        if (studentCounter > m || arr[i] > mid) return false;
        pageSum = arr[i];
      }
    }
    return true;
  }

  let start = 0;
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    sum += a[i];
  }
  let end = sum;
  let ans = -1;
  let mid = Math.floor(start + (end - start) / 2);

  while (start <= end) {
    if (isPossible(a, n, m, mid)) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
}

console.log(findPages([12, 34, 67, 90], 4, 5));
