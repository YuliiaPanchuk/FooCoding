/* 1. Strings!
Consider the following string:
*/
let myString = "hello,this,is,a,difficult,to,read,sentence";

// 1.1 Add the string to your file and log it.
console.log(myString);

// 1.2 Log the length of myString.
console.log(myString.length);

// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
myString = myString.replaceAll(",", " ");

// 1.4 Log myString to see if you succeeded.
console.log(myString);

/* 2. Arrays!
Consider the following array:
*/
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push("turtle");

// 2.2 Log your new array!
console.log(favoriteAnimals);

// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, "meerkat");

// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log("I think the new value of the array is 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'");

// 2.5 Log your new array!
console.log(favoriteAnimals);

// 2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
console.log("The array has a length of " + favoriteAnimals.length + " words");

// 2.7 Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3, 1);

// 2.8 Again log your new array.
console.log(favoriteAnimals);

// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
favoriteAnimals.indexOf("meerkat");

// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));

// More JavaScript 
// 1.Create a function that takes 3 arguments and returns the sum of the these arguments.
function calcFunction(argOne, argTwo, argThree) {
  let sum = argOne + argTwo + argThree;

  return sum;
}
calcFunction(2, 2, 2) // output is 6

// 2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
  return console.log("a " + color + " car");
}
colorCar("red") // output is "a red car"

// 3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let myObj = {
  name: "my Name",
  age: 20,
  color: "red"
}

function objFunction(myObj) {
  for (key in myObj) {
    console.log(key, myObj[key]);
  }
}
objFunction(myObj); // prints properties and values

// 4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(color, vehicle) {
  if (vehicle === 1) {
    console.log("a " + color + " car");
  }
  else if (vehicle === 2) {
    console.log("a " + color + " motorbike");
  }
  else {
    console.log("Invalid input")
  }
}
vehicleType("red", 1); // prints 'a red car'
vehicleType("blue", 3); // prints "Invalid input"

/* 5
Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}  */
console.log((3 === 3) ? "yes" : "no");

// 6.Create a function called vehicle, like before, but takes another parameter called age, 
// so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, age, vehicleType) {
  if (age <= 2 && vehicleType === 1) {
    console.log("a " + color + " used car")
  } else if (age >= 3 && age <= 5 && vehicleType === 2) {
    console.log("a " + color + " new car")
  } else {
    console.log("Invalid input")
  }
}
vehicle("blue", 2, 1) // prints 'a blue used car'

// 7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehiclesList = ["motorbike", "caravan", "bike", "car"];

// 8.How do you get the third element from that list?
vehiclesList[2]; // array starts from 0

// 9.Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle(color, age, vehicleType) {
  if (age <= 2) {
    return console.log("a " + color + " used " + vehiclesList[vehicleType])
  }
  if (age >= 3 && age <= 5) {
    return console.log("a " + color + " new " + vehiclesList[vehicleType])
  }
}
vehicle("blue", 2, 1) //  prints 'a blue used caravan'

// 10.Use the list of vehicles to write an advertisement. So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

function adFunction() {
    //let vehiclesList = ["motorbike", "caravan", "bike", "car"];
  let addLogo = "Amazing Joe's Garage, we service ";

  for (let i = 0; i < vehiclesList.length; i++) {
    addLogo += vehiclesList[i] + "s"
    
    if (i === vehiclesList.length -1) {
      addLogo += "."
    }
    else if (i === vehiclesList.length -2) {
      addLogo += " and"
    }
    else{
      addLogo += ", "
    }
  }
  return addLogo
}
adFunction()

// 11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehiclesList.push("anotherVehicle")
adFunction()

// 12.Create an empty object.
let emptyObj = {};

// 13.Create an object that contains the teachers that you have had so far for the different modules.
let teachersObj = {
  Claudiu: "",
  Seif: "",
  Sahin: ""
};

// 14.Add a property to the object you just created that contains the languages that they have taught you.
teachersObj.Claudiu = "HTML class";
teachersObj.Claudiu = "CSS class";
teachersObj.Claudiu = "JS class";

/*15.
  Write some code to test two arrays for equality using == and ===. Test the following:
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;
*/
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// item is element in the array, index is its position in the array
let same = (x.length == y.length) && x.every(function(item, index) {
  return item === y[index];
});
console.log(same); // returns true

/*  if (x === y || x == y) {
  console.log("X equals Y")
} */

// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
x == y; // returns false since each of the value has a different place in memory
x === y; // returns false 
z == y; // returns true 
z == x; // returns false 

/* 16.Take a look at the following code:
  let o1 = { foo: "bar" };
  let o2 = { foo: "bar" };
  let o3 = o2;
*/
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o2.foo = "FOO"; // updating the obj
console.log(o3); // prints {foo: 'FOO'}, mutable

o1.foo = "BAR"; // nothing will be changed since o1 is not pointing to sth

// Does the order that you assign (o3 = o2 or o2 = o3) matter?
// Answer: Since o3 is not defined, assigning: o2 = o3 will return an error that o3 is undefined

// 17.What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;

/* Answer: It will return "string"
If we break it to smaller statements: typeof (typeof bar),
  so first we check (typeof bar) which is a "number", then we check typeof "number" which is a "string"
The following code will return "string" as well:
  let bar = { name: 'Name' };
  typeof typeof bar;
  typeof typeof will almost always return a string
  */



