const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : "",
  values: [],
  getLength() {
    return this.values.length;
  },
  addLink(value = "") {
    if (this.getLength() > 0) {
      this.chain += "~~" + "( " + String(value) + " )";
    } else {
      this.chain += "( " + String(value) + " )";
    }
    this.values.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position < 1 || position > this.getLength()) {
      this.chain = "";
      this.values = [];
      throw new Error("THROWN");
    }
    this.chain = "";
    this.values.splice(position - 1, 1);
    for (let i = 0; i < this.getLength(); i++) {
      if (i > 0) {
        this.chain += "~~" + "( " + String(this.values[i]) + " )";
      } else {
        this.chain += "( " + String(this.values[i]) + " )";
      }      
    }   
    return this;
  },
  reverseChain() {
    this.chain = "";
    this.values = this.values.reverse();
    for (let i = 0; i < this.getLength(); i++) {
      if (i > 0) {
        this.chain += "~~" + "( " + String(this.values[i]) + " )";
      } else {
        this.chain += "( " + String(this.values[i]) + " )";
      }      
    }
    return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = "";
    this.values = [];
    return result;
  }
};

module.exports = chainMaker;
