/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function calculateSubsets(nums, output, theSubsets, index) {
  //base case
  if (index >= nums.length) {
    theSubsets.push([...output]);
    return;
  }

  //include
  let el = nums[index];
  output.push(el);
  calculateSubsets(nums, output, theSubsets, index + 1);
  //exclude
  output.pop();
  calculateSubsets(nums, output, theSubsets, index + 1);
}

var subsets = function (nums) {
  let theSubsets = [],
    output = [],
    index = 0;

  calculateSubsets(nums, output, theSubsets, index);
  return theSubsets;
};

console.log(subsets([1, 2, 2]));
