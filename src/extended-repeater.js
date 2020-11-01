const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  } 
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }    
  for (let i = 1; i <= options.repeatTimes; i++) {
    if (i > 1) {
      result += options.separator;
    }
    result += str;
    if (options.addition !== undefined) {
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        if (j > 1) {
          result += options.additionSeparator;
        }
        result += options.addition;
      }
    } 
  }
  return result;
};
  