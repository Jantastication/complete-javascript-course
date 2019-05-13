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
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// // Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// // typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older tha John");
var x;
console.log(typeof x);
