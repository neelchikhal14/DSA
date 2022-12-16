/**
 * 
 * Check if an Array is Sorted

Problem Statement: Given an array of size n, write a program to check if the given array is sorted in 
(ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

Note: Two consecutive equal values are considered to be sorted.
 */

function checkSorted(arr) {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] - arr[i + 1] <= 0 && i + 1 <= arrLength - 1) {
      continue;
    } else if (arr[i] - arr[i + 1] > 0) {
      return false;
    }
  }
  return true;
}

console.log(checkSorted([-1, 100, 500, 0]));
