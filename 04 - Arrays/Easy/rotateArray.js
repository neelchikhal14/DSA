var rotate = function (nums, k) {
  const numsLen = nums.length;
  //   if (numsLen % k === 0) return nums;
  if (numsLen <= 1) return nums;
  function reverse(nums, left, right) {
    while (left < right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left += 1;
      right -= 1;
    }
  }
  if (k > numsLen) {
    for (let i = 0; i < k % numsLen; i++) {
      reverse(nums, 0, numsLen - 1);
    }
  } else {
    //reverse entire array
    reverse(nums, 0, numsLen - 1);
    //reverse left part
    reverse(nums, 0, k - 1);
    //reverse right part
    reverse(nums, k, numsLen - 1);
  }
};

const nums = [1, 2];
rotate(nums, 3);
console.log(nums);
