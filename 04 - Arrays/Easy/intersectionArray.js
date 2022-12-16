/**
 * Intersection of two sorted arrays

Problem Statement: Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the elements which occur in both the arrays.

Examples:

Example 1:
Input: 
A: [1 2 3 3 4 5 6]
, B: [3 3 5]
Output: 3,3,5
Explanation: We are given two arrays A and B. 
The elements present in both the arrays  
are 3,3 and 5.

Example 2:
Input: 
A: [1 2 3 3 4 5 6]
, B: [3 5]
Output: 3,5
Explanation: We are given two arrays A and B. 
The elements present in both the arrays are 3 and 5.
 */

function findIntersection(nums1, nums2) {
  let pointer1 = 0,
    pointer2 = 0;
  const final = [];
  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] === nums2[pointer2]) {
      final.push(nums1[pointer1]);
      pointer1 += 1;
      pointer2 += 1;
    } else if (nums1[pointer1] < nums2[pointer2]) pointer1 += 1;
    else pointer2 += 1;
  }
  if (final.length === 0) return -1;
  else return final;
}

console.log(
  findIntersection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 4, 5, 10, 11, 12])
);
