// 46. Permutations
// Medium
// 13.9K
// 230
// Companies

// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.

//

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:

// Input: nums = [1]
// Output: [[1]]

//

// Constraints:

//     1 <= nums.length <= 6
//     -10 <= nums[i] <= 10
//     All the integers of nums are unique.

//! approach two- swapping

function swap(nums, indexOne, indexTwo) {
  let temp = nums[indexOne];
  nums[indexOne] = nums[indexTwo];
  nums[indexTwo] = temp;
}

function calcPermutation(finalPermutations, index, nums) {
  // base case
  if (index >= nums.length) {
    finalPermutations.push([...nums]);
    return;
  }

  for (let i = index; i < nums.length; i++) {
    // perform swap
    swap(nums, i, index);
    // recursive call
    calcPermutation(finalPermutations, index + 1, nums);
    // backtracking - reswapping to original positions
    swap(nums, i, index);
  }
}
function permutation(nums) {
  let finalPermutations = [],
    index = 0;

  calcPermutation(finalPermutations, index, nums);
  return finalPermutations;
}

console.log(permutation([1, 2, 3]));
