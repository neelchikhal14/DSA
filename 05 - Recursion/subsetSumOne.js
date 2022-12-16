// ? Problem from GFG

// Given a list arr of N integers, print sums of all subsets in it.

//

// Example 1:

// Input:
// N = 2
// arr[] = {2, 3}
// Output:
// 0 2 3 5
// Explanation:
// When no elements is taken then Sum = 0.
// When only 2 is taken then Sum = 2.
// When only 3 is taken then Sum = 3.
// When element 2 and 3 are taken then
// Sum = 2+3 = 5.

// Example 2:

// Input:
// N = 3
// arr = {5, 2, 1}
// Output:
// 0 1 2 3 5 6 7 8

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function subsetSums() which takes a list/vector and an integer N as an input parameter and return the list/vector of all the subset sums.

// Constraints:
// 1 <= N <= 15
// 0 <= arr[i] <= 104

// ? using recursive way to calcuate powerset along with variable sum

function calcSubsetSum(nums, subsetSum, sum, index) {
  // base condition
  if (index >= nums.length) {
    subsetSum.push(sum);
    return;
  }

  // include a number
  sum = sum + nums[index];
  // make the recursive call
  calcSubsetSum(nums, subsetSum, sum, index + 1);
  // exclude a number
  sum = sum - nums[index];
  calcSubsetSum(nums, subsetSum, sum, index + 1);
}

function subsetSum(nums) {
  let output = [],
    subsetSum = [],
    sum = 0,
    index = 0;

  calcSubsetSum(nums, subsetSum, sum, index);

  return subsetSum;
}

console.log(subsetSum([1, 2, 2]));
