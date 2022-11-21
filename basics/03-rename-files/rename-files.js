/* eslint-disable no-unused-vars */


const renameFiles = arr => {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === current) {
        if (arr.includes(arr[j] + `(${count})`)) count++;
        arr[j] += `(${count})`;
        count++;
      }
    }
  }
  return arr;
};

// Our version, unfinished, 2 specks not working


// function renameFiles (arr) {
//     let newArr = []
//     let n = 1
//     for (let i = 0; i < arr.length; i++) { //newArr.reduce(accum, idx) => if (!newArr.includes(idx)) newArr.push(idx)  }else if (newArr.includes(idx +`(${n})`)) { 
//         if(!newArr.includes(arr[i])) {
//         newArr.push(arr[i])
//         }else if (newArr.includes(arr[i] +`(${n})`)) {
//           n++
//       } else{
//           console.log(newArr.push(arr[i] + `(${n++})`))
//           newArr.push(arr[i] + `(${n++})`)
//       }
//     } 
//     console.log(newArr)
//     return newArr
// } 



// Fullstack solution

// const renameFiles = arrayOfFilenames => {
//   const nameTracker = {};
//   return arrayOfFilenames.map(name => {
//     if (nameTracker[name] === undefined) {
//       nameTracker[name] = 0;
//       return name;
//     }
//     let extension = nameTracker[name] + 1;
//     nameTracker[name] = extension;
//     let extensionName = `${name}(${extension})`;

//     while (
//       nameTracker[extensionName] >= 0 ||
//       arrayOfFilenames.includes(extensionName)
//     ) {
//       extension += 1;
//       extensionName = `${name}(${extension})`;
//     }

//     nameTracker[extensionName] = 0;
//     return extensionName;
//   });
// };



// Recursive Solution (Fullstack)

// const renameFiles = (arrayOfNames) => {
//  const filenames = [];

//   const renamer = (name) => {
//     // if name not in list, do nothing
//     // BASE CASE
//     if (filenames.indexOf(name) === -1) {
//       filenames.push(name);
//     }
//     else {
//       // if the name has numbers, add 1 to the number
//       let parentheses = name.indexOf("(");
//       if (parentheses > -1) {
//         // take current number and add 1
//         let number = +name.match(/\d+/)[0] + 1;
//         //
//         renamer(name.substring(0,parentheses+1)+number+")")
//       }
//       // otherwise, add "(1)" to the name
//       else renamer(name+"(1)");
//     }
//   }

//   arrayOfNames.forEach(renamer);

//   return filenames;
// }
