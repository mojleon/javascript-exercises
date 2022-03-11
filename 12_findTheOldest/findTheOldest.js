const findTheOldest = function () {
  let dDate = new Date();

  let aAges = [];

  arguments[0].forEach((element) => {
    aAges.push(
      typeof element.yearOfDeath == "undefined"
        ? dDate.getFullYear() - element.yearOfBirth
        : element.yearOfDeath - element.yearOfBirth
    );
  });
  return arguments[0][aAges.indexOf(Math.max(...aAges))];
};

// Do not edit below this line
module.exports = findTheOldest;
