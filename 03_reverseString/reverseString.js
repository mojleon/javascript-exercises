const reverseString = function (string) {
  let rString = string.split("").reverse().join("");
  return rString.replace("/,/g", "");
};

// Do not edit below this line
module.exports = reverseString;
