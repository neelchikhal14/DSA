// var compress = function (chars) {
//   let compressed = [];
//   let i = 0;
//   const charsLen = chars.length;
//   if (charsLen === 1) return [chars[0]];
//   let count = 1,
//     char = '';
//   while (i < charsLen) {
//     char = chars[i];
//     while (i < charsLen && chars[i + 1] === char) {
//       count += 1;
//       i++;
//     }
//     if (count === 1) compressed.push(char);
//     else {
//       compressed.push(char);
//       const str = count + '';
//       const splitStr = str.split('');

//       compressed = [...compressed, ...splitStr];
//     }
//     i++;
//     count = 1;
//     char = '';
//   }

//   return compressed;
// };

var compress = function (chars) {
  let compressed = [];
  let i = 0;
  const charsLen = chars.length;
  if (charsLen === 1) return [chars[0]];
  let count = 1,
    char = '';
  while (i < charsLen) {
    char = chars[i];
    while (i < charsLen && chars[i + 1] === char) {
      count += 1;
      i++;
    }
    if (count === 1) compressed.push(char);
    else {
      compressed.push(char);
      const str = count + '';
      const splitStr = str.split('');

      compressed = [...compressed, ...splitStr];
    }
    i++;
    count = 1;
    char = '';
  }

  return compressed;
};
console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
