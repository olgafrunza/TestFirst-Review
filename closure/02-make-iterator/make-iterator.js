/* eslint-disable no-unused-vars */

// Fullstack version
const makeIterator = (array = []) => {
  let index = 0;
  return {
    getNext() {
      const value = array[index++];
      return { value, done: index > array.length };
    },
    getIndex() {
      return Math.min(index, array.length);
    },
  };
};



// Our version bit doesn't work
// function makeIterator (arr = []) {  // this version function... is not working
//     let index = 0
//     return {
//         getNext() {
//                 let value = arr[index++]
//                 return { value, done: index > arr.length }
//         }
//         getIndex() {
//             return Math.min(index, arr.length)
//         }
//     }
// }




