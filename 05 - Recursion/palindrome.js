function palindrome(str) {
  let result = false;
  function check(pointerOne, pointerTwo, str) {
    if (pointerOne < pointerTwo) {
      if (str[pointerOne] === str[pointerTwo]) {
        pointerOne++;
        pointerTwo--;
        check(pointerOne, pointerTwo, str);
      } else {
        return;
      }
    } else {
      result = true;
      return;
    }
  }

  check(0, str.length - 1, str);
  return result;
}

console.log(palindrome('ab'));
