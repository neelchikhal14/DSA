/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   const numsLength = nums.length;
//   if (numsLength === 1) {
//     if (nums[0] === target) return mid;
//     else if (target >= nums[0]) return 1;
//     else return 0;
//   }
//   let start = 0;
//   let end = numsLength - 1;
//   let mid = Math.floor(start + (end - start) / 2);

//   if (nums[mid] === target) return mid;
//   while (start <= end) {
//     if (nums[mid] === target) return mid;
//     else if (target > nums[mid]) start = mid + 1;
//     else end = mid - 1;
//     mid = Math.floor(start + (end - start) / 2);
//   }

//   return start;
// };

// console.log(searchInsert([1, 3], 1));

function arraySortedOrNot(arr, n) {
  // code here
  let result = true;
  if (n === 1) return true;
  for (let i = 0; i <= n - 1; i++) {
    if (i + 1 > n - 1) return result;
    if (arr[i + 1] - arr[i] >= 0) continue;
    else return false;
  }
  return result;
}

console.log(arraySortedOrNot([-20], 1));
