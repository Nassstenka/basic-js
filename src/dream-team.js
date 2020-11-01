const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = [];
  let name;
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === "string") {
      name = members[i].trim();
      result[i] = name[0].toUpperCase();
    }
  }
  result = result.sort();
  return result.join("");
};
