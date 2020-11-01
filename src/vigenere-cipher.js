const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  type;

  constructor(boolValue = true) {
    this.type = boolValue;
  }

  encrypt(value, key) {
    if (value === undefined || key === undefined) {
      throw new Error("THROWN");
    }
    let result = "";
    let longKey = "";
    let i;
    let j = 0;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    value = value.toUpperCase();
    key = key.toUpperCase();

    if (longKey.length < value.length) {
      for (i = 0; i < value.length; i++) {
        if (alphabet.indexOf(value[i]) !== -1) {
          longKey += key[j % key.length];
          j++;
        } else {
          longKey += value[i];
        }
      }
    }

    for (i = 0; i < value.length; i++) {
      if (alphabet.indexOf(value[i]) !== -1 && alphabet.indexOf(longKey[i]) !== -1) {
        let position = Math.abs(alphabet.indexOf(value[i]) + alphabet.indexOf(longKey[i])) % alphabet.length;
        result += alphabet[position];
      } else {
        result += value[i];
      }
    }
    
    if (this.type === true) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }

  decrypt(value, key) {
    if (value === undefined || key === undefined) {
      throw new Error("THROWN");
    }
    let result = "";
    let longKey = "";
    let i;
    let j = 0;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    value = value.toUpperCase();
    key = key.toUpperCase();

    if (longKey.length < value.length) {
      for (i = 0; i < value.length; i++) {
        if (alphabet.indexOf(value[i]) !== -1) {
          longKey += key[j % key.length];
          j++;
        } else {
          longKey += value[i];
        }
      }
    }

    for (i = 0; i < value.length; i++) {
      if (alphabet.indexOf(value[i]) !== -1 && alphabet.indexOf(longKey[i]) !== -1) {
        let position = Math.abs(alphabet.indexOf(value[i]) - alphabet.indexOf(longKey[i]) + alphabet.length) % alphabet.length;
        result += alphabet[position];
      } else {
        result += value[i];
      }
    }
    
    if (this.type === true) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
