
// function pigify (str) {
//     let vowels ="aeiou"
//      let wordArr = str.split(" ")
//      if(!str.includes(" ")) {
//   for (let i = 0; i < strArr.length; i++) {
//         if (vowels.includes(strArr[0])) return str + "ay"
//         console.log(strArr.slice(1) + strArr.splice(0, 1) +  "ay")
//          return strArr.slice(1) + strArr.splice(0, 1) +  "ay"
//   }
//     // str =str.split( " ")
//      } else {
//     }
// }



const pigify = str => {
  // const arr = str.split(" ");
  const isVowel = char => {
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
  };
  return str
    .split(" ")
    .map(el => {
      if (isVowel(el[0])) {
        return el + "ay";
      }
      if (
        (!isVowel(el[0]) && !isVowel(el[1]) && !isVowel(el[2])) ||
        el.includes("squ")
      ) {
        return (el = el.slice(3) + el.slice(0, 3) + "ay");
      }
      if ((!isVowel(el[0]) && !isVowel(el[1])) || el.includes("qu")) {
        return (el = el.slice(2) + el.slice(0, 2) + "ay");
      }
      if (!isVowel(el[0])) {
        return (el = el.slice(1) + el[0] + "ay");
      }
    })
    .join(" ");
};