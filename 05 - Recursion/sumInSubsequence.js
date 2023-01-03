// find the sub arrays whose sum is equal to target sum

function calcSubArrays(nums, index, target, sum, finalSubArrays, output) {
  // base case
  if (index === nums.length) {
    if (sum === target) {
      finalSubArrays.push(output.slice());
    }
    return;
  }

  // include the element

  output.push(nums[index]);
  sum = sum + nums[index];
  calcSubArrays(nums, index + 1, target, sum, finalSubArrays, output);

  // eclude the element
  output.pop();
  sum -= nums[index];
  calcSubArrays(nums, index + 1, target, sum, finalSubArrays, output);
}

function subArraySum(nums, target) {
  let output = [],
    finalSubArrays = [],
    index = 0,
    sum = 0;

  calcSubArrays(nums, index, target, sum, finalSubArrays, output);

  return finalSubArrays;
}

console.log(subArraySum([1, 2, 1], 2));
