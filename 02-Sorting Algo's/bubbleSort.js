// ALGORITHM FOR BUBBLE sORT

/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array using selection sort
 */
function bubbleSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  const rounds = arr.length;

  for (let i = 1; i < rounds; i++) {
    for (let j = 0; j < rounds - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 10, 1, 3, 100, -100]));

/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array using selection sort
 */
function bubbleSortOptimized(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  const rounds = arr.length;
  //if there are no swaps in any round it means that array is now sorted
  let swaped = false;
  for (let i = 1; i < rounds; i++) {
    // console.log('compared');
    for (let j = 0; j < rounds - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swaped = true;
      }
    }
    if (!swaped) break;
  }

  return arr;
}

console.log(bubbleSortOptimized([4, 10, 1, 3, 100, -100]));
