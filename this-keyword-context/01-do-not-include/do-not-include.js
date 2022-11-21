/* eslint-disable no-unused-vars, no-extend-native */

// Fullstack version

Array.prototype.doNotInclude = function (arr) {
  if (!Array.isArray(arr)) arr = [arr];
  return this.filter((val, i) => {
    if (!arr.includes(i)) return val;
  });
};