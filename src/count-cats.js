const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let flatArr = matrix.flat();
  let counter = 0;
  flatArr.forEach(element => {
    if (element == "^^") {
      counter++;
    }
  });
  return counter;
};
