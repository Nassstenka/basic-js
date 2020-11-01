const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("THROWN");
  }
  let result = null;
  let month = date.getMonth();
  if (month === 0 || month === 1 || month === 11) result = "winter";
  else if (month >= 2 && month <= 4) result = "spring";
  else if (month >= 5 && month <= 7) result = "summer";
  else if (month >= 8 && month <= 10) result = "autumn"; 
  return result;
};
