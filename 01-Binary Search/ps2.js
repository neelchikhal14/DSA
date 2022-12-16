// 33. Search in Rotated Sorted Array
// Medium
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums,
// or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// Constraints:

//     1 <= nums.length <= 5000
//     -104 <= nums[i] <= 104
//     All values of nums are unique.
//     nums is an ascending array that is possibly rotated.
//     -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;
  if (len === 1) {
    if (nums[0] !== target) {
      return -1;
    } else {
      return 0;
    }
  }
  //finding pivot index
  // pivot - lowest value
  function getPivot() {
    var start = 0,
      end = len - 1;
    var mid = Math.floor(start + (end - start) / 2);

    while (start < end) {
      if (nums[mid] >= nums[0]) {
        start = mid + 1;
      } else {
        end = mid;
      }
      mid = Math.floor(start + (end - start) / 2);
    }

    return start;
  }

  var pivotIndx = getPivot();

  function binarySearch(s, e, t) {
    var mid = Math.floor(s + (e - s) / 2);
    while (s <= e) {
      if (nums[mid] === t) return mid;
      // since this array decreasing sorted order
      if (nums[mid] > t) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
      mid = Math.floor(s + (e - s) / 2);
    }
    return -1;
  }
  if (nums[pivotIndx] <= target && target <= nums[len - 1]) {
    return binarySearch(pivotIndx, len - 1, target);
  } else {
    return binarySearch(0, pivotIndx - 1, target);
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
