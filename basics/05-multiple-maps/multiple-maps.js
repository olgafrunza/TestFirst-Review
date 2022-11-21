/* eslint-disable no-unused-vars */

const multipleMaps = (input, maps) => {
  return input.map(key => {
    for (const map of maps) {
      if (key in map) return map[key];
    }

    return key;
  });
};




//Our version not working all specs

// function multipleMaps (input, maps) {
//   return input.map(key => {
//     for (let value in maps) {
//       if (key in value) return value[key];
//     }
//   return key;
//   });
// };


// function multipleMaps (arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (typeof arr2[j] === "object")
//             for
//         }
        
//     }
    
// }
