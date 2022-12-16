// Selection  sort recursive way

function recursiveSelectionSort(arr) {
  const arrLen = arr.length;

  function sort(arr, sortingIndex, arrLen) {
    // base case -- if there is less than equal 1 element we can consider that array to be sorted
    if (sortingIndex >= arrLen) return;

    // solving for 1st case
    let minIndex = sortingIndex;
    for (let i = sortingIndex + 1; i <= arrLen - 1; i++) {
      if (arr[i] < arr[minIndex]) minIndex = i;
    }
    //swap
    let temp = arr[sortingIndex];
    arr[sortingIndex] = arr[minIndex];
    arr[minIndex] = temp;

    sortingIndex += 1;

    // recursive call
    sort(arr, sortingIndex, arrLen);
  }

  sort(arr, 0, arrLen);

  console.log(arr);
}

recursiveSelectionSort([12, 9, 4, 3, 2]);
