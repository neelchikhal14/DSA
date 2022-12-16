// 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates
// where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

//

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

//

// Constraints:

//     1 <= candidates.length <= 100
//     1 <= candidates[i] <= 50
//     1 <= target <= 30

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function calcPermutations(index, output, uniquePermutations, target, nums) {
  //base case

  if (target === 0) {
    uniquePermutations.push([...output]);
    return;
  }

  for (let i = index; i < nums.length; i++) {
    // need to make a decision to pick the element
    // if not able to pick current element need to move to next one
    // we will not pick an element if previous element is same
    if (nums[i] === nums[i - 1] && i > index) continue;

    // no need of recursion call if current element is greater than target
    if (nums[i] > target) break;

    // pick the element

    // add the element in array
    output.push(nums[i]);
    // make recursive call , increase index, reduce target
    calcPermutations(i + 1, output, uniquePermutations, target - nums[i], nums);

    // backtracking , need to remove element from output
    output.pop();
  }
}
var combinationSum2 = function (candidates, target) {
  let output = [],
    uniquePermutations = [];

  //sort the array
  candidates.sort((a, b) => {
    return a - b;
  });
  calcPermutations(0, output, uniquePermutations, target, candidates);
  return uniquePermutations;
};

console.log(combinationSum2([1, 2, 2], 3));
