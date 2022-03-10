const sumAll = function () {
  if (Math.min(...arguments) < 0 || typeof arguments[1] !== "number")
    return "ERROR";

  let rNumber = 0;
  for (let i = Math.min(...arguments); i <= Math.max(...arguments); i++) {
    rNumber += i;
  }
  return rNumber;
};

// Do not edit below this line
module.exports = sumAll;
