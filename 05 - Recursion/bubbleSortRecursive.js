// bubble sort recursive way

function recursiveBubbleSort(arr) {
  const arrLen = arr.length;

  function sort(arr, remainingLimit) {
    // base case -- if there is less than equal 1 element we can consider that array to be sorted
    if (remainingLimit <= 1) return;

    // solving for 1st case

    for (let i = 0; i < remainingLimit - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }

    // recursive call
    sort(arr, remainingLimit - 1);
  }

  sort(arr, arrLen);

  console.log(arr);
}

recursiveBubbleSort([12, 9]);
