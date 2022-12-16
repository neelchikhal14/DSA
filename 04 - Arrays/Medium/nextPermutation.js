/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverse(pivotIdx, arrLen, arr) {
  let start = pivotIdx + 1,
    end = arrLen - 1;

  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start += 1;
    end -= 1;
  }
}

function swap(firstIdx, secondIdx, arr) {
  let temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
}
var nextPermutation = function (nums) {
  const numsLen = nums.length;

  let pivotEle = -1,
    pivotIdx = -1,
    greaterThanPivotIdx = -1;

  for (let i = numsLen - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1] && i - 1 >= 0) {
      pivotIdx = i - 1;
      pivotEle = nums[i - 1];
      break;
    }
  }
  if (pivotIdx === -1) {
    reverse(-1, numsLen, nums);
  } else {
    for (let i = numsLen - 1; i >= 0; i--) {
      if (nums[i] > pivotEle && i - 1 >= 0) {
        greaterThanPivotIdx = i;
        break;
      }
    }
    swap(pivotIdx, greaterThanPivotIdx, nums);
    reverse(pivotIdx, numsLen, nums);
  }

  //   console.log(nums);
};

nextPermutation([3, 2, 1]);
