const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let array = [];
  if (!arr.isEmpty) {
    const dp = "--discard-prev";
    const dn = "--discard-next";
    const doubP = "--double-prev";
    const doubN = "--double-next";
    let i = 0;
    let isDiscarded =  false;
    while (i < arr.length) {
      if (arr[i] === dp) {
        if (i - 1 > 0) {
          if (!isDiscarded) {
            array.pop();
          }
        }
        isDiscarded = false;
        i++;
      } else if (arr[i] === dn) {
        i += 2;
        isDiscarded = true;
      } else if (arr[i] === doubP) {
        if (i - 1 > 0) {
          if (!isDiscarded) {
            array.push(arr[i - 1]);
          }
        }
        isDiscarded = false;
        i++;
      } else if (arr[i] === doubN) {
        if (i + 1 < arr.length) {
          array.push(arr[i + 1]);
        }
        isDiscarded = false;
        i ++;
      } else {
        array.push(arr[i]);
        isDiscarded = false;
        i++;
      }
    }
    return array;
  }
  else
  return null;
};
