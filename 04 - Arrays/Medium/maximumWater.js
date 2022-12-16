var maxArea = function (height) {
  const heightLen = height.length;
  let leftPointer = 0,
    rightPointer = heightLen - 1;
  let maxArea = -1;
  while (leftPointer < rightPointer) {
    let currentArea = -1;
    if (height[leftPointer] <= height[rightPointer]) {
      currentArea = height[leftPointer] * (rightPointer - leftPointer);
      if (currentArea >= maxArea) maxArea = currentArea;
      leftPointer += 1;
    } else {
      currentArea = height[rightPointer] * (rightPointer - leftPointer);
      if (currentArea >= maxArea) maxArea = currentArea;
      rightPointer -= 1;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
