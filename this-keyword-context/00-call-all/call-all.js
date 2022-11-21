/* eslint-disable no-unused-vars */

// Fullstack version 

const callAll = (obj, fnArr) => {
  return fnArr.map(fn => {
    return fn.call(obj);
  });
};


