// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

//     0 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     nums is a non-decreasing array.
//     -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var arrLength = nums.length;
  if (arrLength === 1 && nums[0] === target) {
    return [nums[0], nums[0]];
  }
  if (arrLength === 0) return [-1, -1];

  function firstOcc() {
    var firstOccIndex = -1;
    var s = 0,
      e = arrLength - 1;
    var mid = Math.floor(s + (e - s) / 2);

    while (s <= e) {
      if (nums[mid] === target) {
        firstOccIndex = mid;
        e = mid - 1;
      } else if (target > nums[mid]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
      mid = Math.floor(s + (e - s) / 2);
    }
    return firstOccIndex;
  }
  function lastOcc() {
    var lastOccIndex = -1;
    var s = 0,
      e = arrLength - 1;
    var mid = Math.floor(s + (e - s) / 2);

    while (s <= e) {
      if (nums[mid] === target) {
        lastOccIndex = mid;
        s = mid + 1;
      } else if (target > nums[mid]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
      mid = Math.floor(s + (e - s) / 2);
    }
    return lastOccIndex;
  }

  return [firstOcc(), lastOcc()];
  // console.log(lastOcc());
};

// console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5], 3));
// console.log(searchRange1([1, 2, 3, 3, 4, 5], 3));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 852. Peak Index in a Mountain Array
// Medium
// An array arr a mountain if the following properties hold:

//     arr.length >= 3
//     There exists some i with 0 < i < arr.length - 1 such that:
//         arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//         arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// You must solve it in O(log(arr.length)) time complexity.
// Example 1:

// Input: arr = [0,1,0]
// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1

// Constraints:

//     3 <= arr.length <= 105
//     0 <= arr[i] <= 106
//     arr is guaranteed to be a mountain array.

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  if (arr.length === 3) return 1;
  var left = 0,
    right = arr.length - 1;
  var mid = Math.floor(left + (right - left) / 2);

  if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
  while (left <= right) {
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else if (arr[mid] > arr[mid + 1]) {
      right = mid - 1;
    }
    mid = Math.floor(left + (right - left) / 2);
  }
};

console.log(peakIndexInMountainArray([0, 10, 20, 50, 100, 200, 40, 5, 2]));
