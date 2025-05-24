const CURRENT_YEAR = 2025;

const findTheOldest = function(people) {
  const sortedPeople = people.toSorted((personA, personB) => {
    const yearOfDeathA = personA.yearOfDeath === undefined 
      ? CURRENT_YEAR 
      : personA.yearOfDeath;
    const yearOfDeathB = personB.yearOfDeath === undefined 
      ? CURRENT_YEAR 
      : personB.yearOfDeath;

    const ageA = yearOfDeathA - personA.yearOfBirth;
    const ageB = yearOfDeathB - personB.yearOfBirth;
    return ageA - ageB;
  })

  return sortedPeople.slice(-1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
