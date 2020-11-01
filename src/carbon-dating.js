const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined) {
    return false;
  }
  if (typeof sampleActivity !== "string") {
    return false;
  }
  sampleActivity = Number(sampleActivity);
  if (isNaN(sampleActivity)) {
    return false;
  }
  if (sampleActivity > MODERN_ACTIVITY || sampleActivity < 1) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let age = Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY) / k);
  return age;
};
