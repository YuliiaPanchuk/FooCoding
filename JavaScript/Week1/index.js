// 1. Write a console.log statement saying "Hello World!" for each language that you know:
console.log("Hello World"); // English
console.log("Привіт Світ"); // Ukrainian
console.log("Hej världen"); // Swedish
console.log("Witaj świecie"); // Polish
console.log("Привет, мир"); // Russian

// 2. Consider the following code: console.log('I'm awesome'); (Fix it)
console.log("I'm awesome");

//3
// 3.1 First, declare your variable x (do not initialize it yet).
let x;

// 3.2 Add a console.log statement that explains in words what you think the value of x is, like in this example:
console.log("The value of variable 'x' will be an integer.");

// 3.3 Add a console.log statement that logs the value of x.
console.log(x); // will print "undefined"

// 3.4 Now initialize your variable x with an integer.
x = 4;

// 3.5 Next, add a console.log statement that explains what you think the value of x is.
console.log("The value of variable 'x' is 4");

// 3.6 Add a console.log statement that logs the value of x.
console.log(x);

// 4
// 4. Declare a variable y and assign a string to it.
let y = "I am a string";

// 4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
console.log("The value of variable 'y' is a string");

// 4.2 Now console.log the variable y.
console.log(y);

// 4.3 Now assign a new string to the variable y.
y = "I am another string";

// 4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
console.log("The value of variable 'y' is another string");

// 4.5 Now console.log y again.
console.log(y);

// 5.
// 5.1 Declare a variable z and assign the number 7.25 to it.
let z = 7.25;

// 5.2 console.log z.
console.log(z);

// 5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
let a = Math.round(z);

// 5.4 console.log a.
console.log(a);

// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
let highestValue;

if (z > a) {
    highestValue = z;
} else {
    highestValue = a;
}

// 5.6 console.log the highest value.
console.log(highestValue); // will print 7.25

// 6
// 6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element.
let myArray = [];

// 6.2 Write a console.log statement that explains in words what you think the value of the array is.
console.log("I think the value of the array is an empty array");

// 6.3 console.log your array.
console.log(myArray);

// 6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
let animals = ["dog", "cat", "rabbit"];

// 6.5 Log your array.
console.log(animals);

// 6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
animals.push("baby pig");

// 6.7 Log your new array!
console.log(animals);

/*7. More strings
Let's consider the following string: let myString = "this is a test" */ 
let myString = "this is a test";

// 7.1 Add the string to your file and console.log it.
console.log(myString);

// 7.2 Find a way to get the length of myString.
let strLength = myString.length;

// 7.3 console.log the length of myString.
console.log(strLength);

/* 8
8.1 First declare at least four variables and assign them different data types:
8.2 For each variable write a console.log statement that logs the value: */
let myInt = 1;
console.log("The value of my variable myInt is: " + myInt);

let myStr = "Hello World";
console.log("The value of my variable myStr is: " + myStr);

let myBool = true;
console.log("The value of my variable myBool is: " + myBool);

let myArr = ["Audi", "BMW", "Mercedes"];
console.log("The value of my variable myArr is: " + myArr);

/* 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
8.4 Now use typeof to log the actual type of your variables: */
console.log("I think the type of my variable myInt is integer");
console.log(typeof myInt);

console.log("I think the type of my variable myStr is string");
console.log(typeof myStr);

console.log("I think the type of my variable myBool is boolean");
console.log(typeof myBool);

console.log("I think the type of my variable myArr is array");
console.log(typeof myArr);

// checks the types of two variables and prints out SAME TYPE if they are the same type
function checkingTypes(firstVar, secondVar) {
    // Using "===" operator since it checks already the type of the value
    if (firstVar === secondVar) {
        console.log("SAME TYPE")
    } else {
        console.log(`The ${firstVar} has the type of ${typeof firstVar},
        and the ${secondVar} has a type of ${typeof secondVar}.`)
    }
}

checkingTypes(myArr, myArray) // "SAME TYPE"
checkingTypes(myStr, myBool) // "different types"


// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
let anotherX = 7;
anotherX %= 3;
console.log(1); // 3 + 3 = 6; 7 - 6 = 1

// 9.1 Add at least 3 console.log statements in which you show that you understand what % does.
console.log(9 % 3); // expected to print 0
console.log(5 % 2); // expected to print 1
console.log(14 & 5); // expected to print 4

/* 10
10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer */
let anotherArray = [1, "Hello", true, ["Hello", "World"], { name: "myNAme", surname: "mySurname" }];
console.log(anotherArray);

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
let compareInfinit = (6 / 0 === 10 / 0) ? "YES" : "NO";
console.log(compareInfinit);