const flatten = (arr) => {
  let flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr = [...flattenedArr, ...flatten(arr[i])];
      flatten(arr[i]);
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
};

console.log(
  flatten([
    [1, 2, 3, [4, 5, [6], [7, 8]], [9, 10, 11]],
    12,
    13,
    [14, 15, [16, 17]],
  ])
);
