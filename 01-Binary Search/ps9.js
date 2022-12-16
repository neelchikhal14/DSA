/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const len = nums.length;
  //edge conditions
  if (len === 1) return 0;

  let start = 0,
    end = len - 1,
    mid = Math.floor(start + (end - start) / 2);

  while (start <= end) {
    if (mid === 0) {
      if (nums[0] >= nums[1]) return 0;
      return 1;
    }
    if (nums[mid] >= nums[mid - 1] && nums[mid] >= nums[mid + 1]) return mid;
    else if (nums[mid] < nums[mid + 1]) start = mid + 1;
    else end = mid - 1;
    mid = Math.floor(start + (end - start) / 2);
  }
  return mid;
};

console.log(findPeakElement([1, 4, 2]));

var search = function (nums, target) {
  let len = nums.length;
  let start = 0,
    end = len - 1,
    mid = Math.floor(start + (end - start) / 2);
  if (nums[mid] === target) return mid;
  while (start < end) {
    if (nums[mid] === target) return mid;

    if (nums[mid] < nums[mid + 1]) {
      if (target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target < nums[mid]) {
        start = mid + 1;
      } else {
        end = start - 1;
      }
    }
  }
  return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
