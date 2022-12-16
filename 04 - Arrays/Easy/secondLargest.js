/**
 * Find Second Smallest and Second Largest Element in an array w/o sorting

Problem Statement: Given an array, find the second smallest and second largest element in the array. 
Print ‘-1’ in the event that either of them doesn’t exist.
 */

function secondLargest(arr) {
  if (arr.lenth <= 1) return -1;
  let largest = -1,
    secondLargest = -1;
  startIndex = 0;

  if (arr[startIndex] >= arr[startIndex + 1]) {
    largest = arr[startIndex];
    secondLargest = arr[startIndex + 1];
  } else if (arr[startIndex] < arr[startIndex + 1]) {
    largest = arr[startIndex + 1];
    secondLargest = arr[startIndex];
  }

  startIndex += 2;

  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
    else if (arr[i] < largest && arr[i] >= secondLargest)
      secondLargest = arr[i];
  }
  console.log(secondLargest);
}

secondLargest([1]);
