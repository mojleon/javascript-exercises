const removeFromArray = function () {
  let splicedArray = arguments[0];
  for (let i = 1; i <= arguments.length; i++) {
    splicedArray = splicedArray.filter((item) => {
      return item !== arguments[i];
    });
  }

  return splicedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
