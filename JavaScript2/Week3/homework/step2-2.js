'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [...Array(stopIndex - startIndex + 1).keys()].map(x => x + startIndex)
  console.log(numbers)

  numbers.forEach(number => {
    if (number % 3 === 0) threeCallback(number);
    if (number % 5 === 0) fiveCallback(number);
    if (number % 3 === 0 && number % 5 === 0) {
      threeCallback(number)
      fiveCallback(number)
    }
  });

}

function sayThree(number) {
  console.log(`The value of ${number} is divisible by 3!`);
}

function sayFive(number) {
  console.log(`The value of ${number} is divisible by 5!`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
