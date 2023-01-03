// 90. Subsets II
// Medium
// 7.1K
// 201
// Companies

// Given an integer array nums that may contain duplicates, return all possible
// subsets
// (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

//

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

//

// Constraints:

//     1 <= nums.length <= 10
//     -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function calcSubset(index, subsets, output, nums) {
  //base case
  //   if (index >= nums.length) {
  //     subsets.push([...output]);
  //     return;
  //   }
  subsets.push([...output]);
  for (let i = index; i < nums.length; i++) {
    // make a decision to not include an element
    if (nums[i] === nums[i - 1] && i !== index) continue;
    // include the element
    output.push(nums[i]);
    calcSubset(i + 1, subsets, output, nums);
    // backtracking
    output.pop();
  }
}
var subsetsWithoutDup = function (nums) {
  let output = [],
    index = 0,
    subsets = [];
  nums.sort((a, b) => {
    return a - b;
  });
  calcSubset(index, subsets, output, nums);

  return subsets;
};

console.log(subsetsWithoutDup([4, 4, 4, 1, 4]));
