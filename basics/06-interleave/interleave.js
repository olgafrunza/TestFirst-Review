// function interleave (...str) {
//     for (let i = 0; i < str.length; i++) {
//         return str[i][0] + str[i][0]
//     }
// }





const interleave = (...args) => {
  let newStr = "";
  const reducer = (accStr, curStr) => {
    if (curStr.length > accStr) return curStr.length;
    else return accStr;
  };
  let longest = args.reduce(reducer, 0);
  for (let i = 0; i < longest; i++) {
    for (let j = 0; j < args.length; j++) {
      let curWord = args[j];
      if (curWord[i]) {
        newStr += curWord[i];
      }
    }
  }
  return newStr;
};