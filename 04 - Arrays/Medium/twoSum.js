var twoSum = function (nums, target) {
  const myMap = new Map();
  const arrLen = nums.length;
  let i = 0;
  let difference = -1;
  for (; i < arrLen; i++) {
    difference = target - nums[i];
    if (myMap.has(difference)) break;
    else myMap.set(nums[i], i);
  }

  return [i, myMap.get(difference)];
};

console.log(twoSum([3, 2, 4], 6));
