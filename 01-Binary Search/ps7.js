/**
 * 34. Find First and Last Position of Element in Sorted Array
Medium
14.2K
348
Companies

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

 

Constraints:

    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums is a non-decreasing array.
    -109 <= target <= 109


 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const arrLength = nums.length;
  if (arrLength === 1) {
    if (nums[0] === target) return [0, 0];
    else return [-1, -1];
  }
  if (arrLength === 0) return [-1, -1];
  let start = 0;
  let end = arrLength - 1;
  let mid = Math.floor(start + (end - start) / 2);
  let firstOcc = -1;
  let lastOcc = -1;

  while (start <= end) {
    if (nums[mid] === target) {
      firstOcc = mid;
      end = mid - 1;
    } else if (target > nums[mid]) start = mid + 1;
    else if (target < nums[mid]) end = mid - 1;

    mid = Math.floor(start + (end - start) / 2);
  }
  start = 0;
  end = arrLength - 1;
  mid = Math.floor(start + (end - start) / 2);
  while (start <= end) {
    if (nums[mid] === target) {
      lastOcc = mid;
      start = mid + 1;
    } else if (target > nums[mid]) start = mid + 1;
    else if (target < nums[mid]) end = mid - 1;

    mid = Math.floor(start + (end - start) / 2);
  }
  return [firstOcc, lastOcc];
};

console.log(searchRange([1, 5, 7, 9, 9, 9, 12, 15, , 17], 9));
