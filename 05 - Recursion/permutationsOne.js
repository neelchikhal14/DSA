// 46. Permutations
// Medium
// 13.9K
// 230
// Companies

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

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

//! using extra space complexity

function createInitialMap(numsLen) {
  const initMap = new Map();
  for (let i = 0; i < numsLen; i++) {
    initMap.set(i, false);
  }
  return initMap;
}

function calPermutations(nums, myMap, output, finalPermutation) {
  // base condition
  if (myMap.size === output.length) {
    finalPermutation.push(output.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    // check if element is picked in map
    if (!myMap.get(i)) {
      // mark it as picked
      myMap.set(i, true);
      // add the element
      output.push(nums[i]);
      // recursive call
      calPermutations(nums, myMap, output, finalPermutation);
      // backtracking
      // 1.) remove from output
      output.pop(nums[i]);
      myMap.set(i, false);
    }
  }
}

function permutation(nums) {
  const myMap = createInitialMap(nums.length);
  let output = [],
    finalPermutation = [];

  calPermutations(nums, myMap, output, finalPermutation);

  return finalPermutation;
}

console.log(permutation([1, 2, 3]));
