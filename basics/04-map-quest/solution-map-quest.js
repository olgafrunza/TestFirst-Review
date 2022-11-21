/* eslint-disable no-unused-vars */



function mapQuest(arr) {
  let opposite = {
    N: 'S',
    E: 'W',
    S: 'N',
    W: 'E',
  };
  return arr.reduce(function (accum, val) {
    if (accum[accum.length - 1] === opposite[val]) accum.pop();
    else accum.push(val);
    return accum;
  }, []);
}
  
  for (let i = 0; i < arr.length; i++) {
    if(opposite[arr[i]] = arr[i+1]) i++
  }
  
  // function mapQuest (arr) {
//     let newArr = []
//     let oppSN = ["N", "S"] || ["S", "N"]
//     let oppWE = [ "W", "E"] || ["E", "W"]
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i] && arr[i + 1].includes(oppSN) || !arr[i] && arr[i + 1].includes(oppWE))
//         newArr.push(arr[i])
        // }
//     return newArr
// }



// function mapQuest(arr) {
//     let newArr = []
//   let opposite = {
//     N: 'S',
//     E: 'W',
//     S: 'N',
//     W: 'E',
//   };
//   for (let i = 0; i < arr.length; i++) {
//       if (!arr.includes(opposite.key)) newArr.push(arr[i])
//   }
//   return newArr
// }