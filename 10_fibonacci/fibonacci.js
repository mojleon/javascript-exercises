const fibonacci = function () {
  if (arguments[0] < 0) return "OOPS";
  for (let i = 0, j = 1, k = 0; k <= arguments[0]; i = j, j = x, k++) {
    x = i + j;
    if (arguments[0] - 2 == k) return i + j;
  }
  return 1;
};

// Do not edit below this line
module.exports = fibonacci;
