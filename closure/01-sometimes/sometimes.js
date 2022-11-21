/* eslint-disable no-unused-vars */
function sometimes (func) {
    let count = 1
    return function() {
        if (count < 4) {
            count++ 
        return func(...arguments)
        }
        
    if (count % 2 === 1) {
        count++
    return func(...arguments)
    }
    
    count++
    return 'I do not know!'
    }
}

// const sometimes = func => {
//   let callCount = 1;
//   return function() {
//     // first 3 calls should return a value:
//     if (callCount <= 3) {
//       callCount++;
//       return func(...arguments);
//     }

//     // after first 3,
//     // all odd calls should return a value:
//     if (callCount % 2 === 1) {
//       callCount++;
//       return func(...arguments);
//     }

//     // and all even calls should return 'idk':
//     callCount++;
//     return 'I do not know!';
//   };
// };