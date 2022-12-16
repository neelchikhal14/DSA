function getMaxOccuringChar(str) {
  if (str.length === 1) return 1;
  if (str.length === 0) return 0;
  // code here
  const arrMap = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    const ascii = letter.charCodeAt(0);
    const idx = ascii - 97;
    // console.log(letter, ascii, idx);
    arrMap[idx] += 1;
  }
  //   console.log(arrMap);
  let max = 0;
  for (let i = 0; i < arrMap.length; i++) {
    if (arrMap[i] >= max) max = arrMap[i];
  }
  //   console.log(max);
  for (let i = 0; i < arrMap.length; i++) {
    if (arrMap[i] === max) {
      charCode = 97 + parseInt(i);
      return String.fromCharCode(charCode);
    }
  }
}

console.log(getMaxOccuringChar('testsample'));
