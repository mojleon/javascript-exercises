const palindromes = function () {
  let string = arguments[0].trim().toLowerCase();
  string = string.replace(/\W/g, "");
  let subString = string.substring(0, string.length / 2);

  for (let c = 0; c <= subString.length / 2; c++) {
    if (subString[c] == string[string.length - 1 - c]) continue;
    return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
