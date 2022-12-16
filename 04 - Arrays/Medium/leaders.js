function getLeaders(arr, n) {
  // code here
  // const arrLen = arr.length;
  let maximum = arr[n - 1];
  const leaders = [];
  leaders.push(arr[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maximum) {
      maximum = arr[i];
      leaders.push(arr[i]);
    }
  }
  return leaders.reverse();
}

console.log(getLeaders([16, 17, 4, 3, 5, 2], 6));
