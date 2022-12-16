function swap(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

function partition(arr, start, end) {
  //choose pivot
  let pivot = arr[start];
  let eleLessThanPivot = 0;
  //count elements less than pivot
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] <= pivot) eleLessThanPivot += 1;
  }

  //put pivot to its correct place -- swap
  let pivotIndex = start + eleLessThanPivot;

  swap(arr, start, pivotIndex);

  // put rest of the elements on theit correct side of pivot
  let leftPointer = start,
    rightPointer = end;
  while (leftPointer < pivotIndex && rightPointer > pivotIndex) {
    while (arr[leftPointer] < arr[pivotIndex]) {
      leftPointer += 1;
    }
    while (arr[rightPointer] > arr[pivotIndex]) {
      rightPointer -= 1;
    }
    if (leftPointer < pivotIndex && rightPointer > pivotIndex) {
      swap(arr, leftPointer, rightPointer);

      leftPointer += 1;
      rightPointer -= 1;
    }
  }
  return pivotIndex;
}
function quickSort(arr, start, end) {
  if (start < end) {
    //partition
    let p = partition(arr, start, end);
    //sort left part
    quickSort(theArr, start, p - 1);
    //sort right part
    quickSort(arr, p + 1, end);
  }
}

const theArr = [2, 4, 1, 6, 9, 9, 9, 9, 9, 9, 9, 9];
quickSort(theArr, 0, theArr.length - 1);
console.log(theArr);
