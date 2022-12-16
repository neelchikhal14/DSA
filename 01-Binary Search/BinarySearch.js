var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  if (nums[mid] === target) return mid;
  while (start <= end) {
    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return -1;
};
console.log(search([2, 5], 5));
