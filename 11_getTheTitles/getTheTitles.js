const getTheTitles = function () {
  let aTitles = [];
  arguments[0].forEach((element) => {
    aTitles.push(element.title);
  });
  return aTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
