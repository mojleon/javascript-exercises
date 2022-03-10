const leapYears = function () {
  let sYear = arguments[0].toString();
  let bRoundYear = Boolean(
    sYear[sYear.length - 1] == 0 && sYear[sYear.length - 2] == 0
  );
  if (bRoundYear && arguments[0] % 400 == 0) return true;
  if (!bRoundYear && arguments[0] % 4 == 0) return true;
  return false;
};

// Do not edit below this line
module.exports = leapYears;
