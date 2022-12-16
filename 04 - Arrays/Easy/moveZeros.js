var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;
  let count = 0,
    pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count += 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) continue;
    else {
      nums[pointer] = nums[i];
      pointer += 1;
    }
  }
  for (let i = pointer; i < nums.length; i++) {
    nums[i] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];

moveZeroes(nums);
console.log(nums);
