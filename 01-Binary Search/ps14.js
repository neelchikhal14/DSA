var smallestDivisor = function (nums, threshold) {
  let start = 0;
  let end = Math.max(...nums);
  let mid = Math.floor(start + (end - start) / 2);

  const divisorSum = (nums, divisor) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % divisor === 0) sum += Math.ceil(nums[i] / divisor);
      else {
        sum += Math.ceil(nums[i] / divisor);
      }
    }
    return sum;
  };
  let ans = -1;
  while (start <= end) {
    if (divisorSum(nums, mid) > threshold) {
      start = mid + 1;
    } else {
      ans = mid;
      end = mid - 1;
    }

    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
};

console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
