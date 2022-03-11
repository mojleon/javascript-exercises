const caesar = function () {
  var rString = arguments[0];

  for (let i = 0; i <= arguments[0].length - 1; i++) {
    let bChar = checkForSpecialSymbols(rString[i]);
    if (bChar) continue;

    let iCharIndex = rString[i].charCodeAt(rString[i]);
    console.log(String.fromCharCode(iCharIndex), iCharIndex);
    rString = rString.replace(
      rString[i],
      String.fromCharCode(iCharIndex + arguments[1])
    );
  }

  return rString;
};

function checkForSpecialSymbols(char) {
  return char == " " || char == "'" || char == "!" || char == ",";
}

// Do not edit below this line
module.exports = caesar;
