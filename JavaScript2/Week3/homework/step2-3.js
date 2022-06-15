'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str
  }

  if (num <= 0) {
    return "";
  }

  return result
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  let i = 0;
  while (i < num) {
    result += str
    i++;
  }
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';

  let i = 0;
  do {
    result += str;
    i++;

    if (num <= 0) {
      return ""
    }

  } while (i < num)

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
