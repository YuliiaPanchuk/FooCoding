'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/*
1. x is assigned to an integer (Primitive type). In the 1st example it just makes a copy of x
because by using "const" to premitives means thayt we cannot change it, change the value; (passed by value)

Line 9 calls f1(x) function which is taking x as an argument and do whatever is inside the function.
Line 11 is just displays value of x to the console.

2. y is assigned to an object, which means it is possible to change (modify) it; (passed by reference)
*/
