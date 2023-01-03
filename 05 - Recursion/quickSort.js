function partition(arr, start, end) {
  //choose pivot
  let pivot = arr[start];

  // count number of elements smaller than pivot
  let smallerElements = 0;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) smallerElements += 1;
  }

  // calculate right place (index) for pivot and perform swap
  // start , correctpivotIndex
  let correctPivotIndex = start + smallerElements;
  let temp = arr[correctPivotIndex];
  arr[correctPivotIndex] = arr[start];
  arr[start] = temp;

  // perform swapping -> move elements smaller than pivot to left side and greater than pivot elements to right side
  let left = start,
    right = end;
  while (left < correctPivotIndex && right > correctPivotIndex) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left < correctPivotIndex && right > correctPivotIndex) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  return correctPivotIndex;
}

function sort(arr, start, end) {
  // base case
  if (start >= end) return;

  // do the partition
  let pivot = partition(arr, start, end);

  // quick sort left side
  sort(arr, start, pivot - 1);

  // quick sort right side
  sort(arr, pivot + 1, end);
}

function quickSort(arr) {
  sort(arr, 0, arr.length - 1);

  console.log(arr);
}

const theArr = [10, 20, 100, 1000, -5, -7, 6];

quickSort(theArr);
