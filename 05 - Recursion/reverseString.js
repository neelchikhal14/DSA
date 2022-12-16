function recursiveStringRev(str) {
  const array = Array.from(str);
  const arrLen = array.length;
  function reverse(pointerOne, pointerTwo, str) {
    if (pointerOne > pointerTwo) return;
    else {
      //swapping
      let first = str[pointerOne];
      let temp = str[pointerTwo];

      str[pointerOne] = temp;
      str[pointerTwo] = first;
      pointerOne++;
      pointerTwo--;
      //recursive call
      reverse(pointerOne, pointerTwo, str);
    }
  }
  reverse(0, arrLen - 1, array);
  return array;
}

console.log(recursiveStringRev('Hello'));
