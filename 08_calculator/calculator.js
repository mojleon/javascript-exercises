const add = function () {
  return arguments[0] + arguments[1];
};

const subtract = function () {
  return arguments[0] - arguments[1];
};

const sum = function () {
  let sum = 0;
  arguments[0].forEach((num) => {
    sum += num;
  });
  return sum;
};

const multiply = function () {
  let sum = arguments[0][0];
  for (let i = 1; i <= arguments[0].length - 1; i++) {
    sum = sum * arguments[0][i];
  }
  return sum;
};

const power = function () {
  return arguments[0] ** arguments[1];
};

const factorial = function () {
  if (arguments[0] === 0) return 1;

  let factorialNum = arguments[0];

  for (let i = arguments[0] - 1; i > 0; i--) {
    factorialNum = factorialNum * i;
  }

  return factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
