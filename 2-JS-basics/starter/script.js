// // Variables and data types
// let firstName = "John";
// console.log(firstName);

// const lastName = "Smith";
// const age = 28;

// const fullAge = true;
// console.log(fullAge);

// let job;
// console.log(job);

// job = "Teacher";
// console.log(job);

// // Variable naming rules
// let _3years = 3
// var johnMark = "John and Mark"

/*Variables mutation and type coercion */

// var firstName = "John";
// var age = 28;

// // Type coercion
// console.log(firstName + " " + age);

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );

// // Variable mutation
// age = "twenty eight";
// job = "driver";
// alert(
//   firstName +
//     " is a " +
//     age +
//     " year old " +
//     job +
//     ". Is he married? " +
//     isMarried
// );
// var lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName);

/**************
 * Basic operators
 */
// var now, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(yearMark);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older tha John");
// var x;
// console.log(typeof x);
/**************
 * Operator precedence
 */
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);

/*********
 * Code Challenge
 */

// var BMI = (mass / height) ^ 2;
//  mass / (height * height);
//  mass in kg and height in meters

// let jMass = 80;
// let jHeight = 4;
// let mMass = 60;
// let mHeight = 5;

// var jBMI = (jMass / jHeight) ^ 2;
// console.log(jBMI);

// var mBMI = (mMass / mHeight) ^ 2;
// console.log(mBMI);

// var isHigher = jBMI > mBMI;
// // console.log(isHigher);

// console.log("is john's' BMI higher than + mark's? " + isHigher);
/******
 * If / else statement
 */

// var firstName = "John";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon :)");
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + " is married!");
// } else {
//   console.log(firstName + " will hopefully marry soon :)");
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's.");
// } else {
//   console.log("John's BMI is higher than Marks's.");
// }

/***********
 * Boolean Logic
 */
// var firstName = "John";
// var age = 20;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

/************
 * The Ternary Operator and Switch Statements
 */
// var firstName = "John";
// var age = 14;

// // Ternary operator
// age >= 18
//   ? console.log(firstName + " drinks beer.")
//   : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// if (age >= 18) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// }

// Switch statement
// var job = "instructor";
// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives an uber in Lisbon.");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something else.");
// }

// age = 56;
// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
//   default:
//     console.log(firstName + " is a man.");
// }
/*****************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//   console.log("Variable is defined");
// } else {
//   console.log("Variable has NOT been defined");
// }

// // Equality operators
// if (height === "23") {
//   console.log("The == operator does type coercion!");
// }
/************
 * Code Challenge
 */

// var j = "teamJohn";
// var m = "teamMike";
// var y = "teamMary";

// jGame1 = 89;
// jGame2 = 120;
// jGame3 = 103;

// mGame1 = 116;
// mGame2 = 94;
// mGame3 = 123;

// yGame1 = 97;
// yGame2 = 134;
// yGame3 = 105;

// let jAv = (jGame1 + jGame2 + jGame3) / 3;
// console.log(jAv);

// let mAv = (mGame1 + mGame2 + mGame3) / 3;
// console.log(mAv);

// let yAv = (yGame1 + yGame2 + yGame3) / 3;
// console.log(yAv);

// if (jAv > mAv) {
//   console.log(
//     j +
//       " " +
//       "is the winner of the average score with" +
//       " " +
//       jAv +
//       " " +
//       "points"
//   );
// } else if (mAv > jAv) {
//   console.log(
//     m +
//       " " +
//       "is the winner of the average score with" +
//       " " +
//       mAv +
//       " " +
//       "points"
//   );
// } else {
//   console.log(j + " and " + m + " " + "drew");
// }

// if (jAv > mAv && jAv > yAv) {
//   console.log(
//     j +
//       " " +
//       "is the winner of the average score with" +
//       " " +
//       jAv +
//       " " +
//       "points"
//   );
// } else if (mAv > jAv && mAv > yAv) {
//   console.log(
//     m +
//       " " +
//       "is the winner of the average score with" +
//       " " +
//       mAv +
//       " " +
//       "points"
//   );
// } else if (yAv > jAv && yAv > mAv) {
//   console.log(
//     y +
//       " " +
//       "is the winner of the average score with" +
//       " " +
//       yAv +
//       " " +
//       "points"
//   );
// } else {
//   console.log(j + " " + m + " and " + y + " " + "drew");
// }

/********
 * Functions
 */

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1986);
// var ageJane = calculateAge(1989);
// console.log(ageJohn, ageJane, ageMike);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years.");
//   } else {
//     console.log(firstName + " is already retired.");
//   }
// }

// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1948, "Mike");
// yearsUntilRetirement(1969, "Jane");

/*****************************
 * Function Statements and Expressions
 */

//Function declaration
//function whatDoYouDo(job, firstName) {}

// Function expression
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code";
//     case "driver":
//       return firstName + " drives a cab in Lisbon.";
//     case "designer":
//       return firstName + " designs beautiful websites";
//     default:
//       return firstName + " does something else";
//   }
// };

// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("designer", "Jane"));
// console.log(whatDoYouDo("retired", "Mark"));

/*****************************
 * Arrays
 */

// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is NOT a designer"
    : "John IS a designer";
console.log(isDesigner);

/********
 * Code Challenge
 */

function tipCalculator(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}
console.log(tipCalculator(300));
const bills = [124, 48, 268];
const tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);
