/**
 * Aggressive Cows : Detailed Solution

Problem Statement: There is a new barn with N stalls and C cows. The stalls are located on a straight line at positions x1,….,xN 
(0 <= xi <= 1,000,000,000). We want to assign the cows to the stalls, such that the minimum distance between any two of them is as 
large as possible. What is the largest minimum distance?

Examples:

Input: No of stalls = 5 
       Array: {1,2,8,4,9}
       And number of cows: 3

Output: One integer, the largest minimum distance 3


 */

function aggresiveCows(arr, stalls, n) {
  arr.sort();
  let start = 0,
    max = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= max) max = arr[i];
  }
  let end = max;
  let mid = Math.floor(start + (end - start) / 2);

  let ans = -1;

  function possibleAnswer(stalls, n, mid) {
    let cowCount = 1,
      lastPosition = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] - lastPosition >= mid) {
      }
    }
  }

  while (start <= end) {
    if (possibleAnswer(stalls, n, mid)) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
}
