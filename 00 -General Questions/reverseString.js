function reverseString(str) {
  let arr = [...str];
  let start = 0,
    end = arr.length - 1;
  console.log(start, end);
  while (start <= end) {
    let temp = arr[end];

    arr[end] = arr[start];

    arr[start] = temp;

    start += 1;
    end -= 1;
  }

  console.log(arr);
}

reverseString('Hello');
