// The spread operator in JavaScript is denoted by three consecutive dots ... and is used to spread or 
//expand iterable objects (such as arrays, strings, and objects) into individual elements.

// Here are some examples of how the spread operator can be used:

// To concatenate two or more arrays:
// javascript
// Copy code
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]


// To create a copy of an array or object:
// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];

// console.log(copyArray); // Output: [1, 2, 3]
// To pass arguments to a function:
// scss
// Copy code
// function myFunction(x, y, z) {
//   console.log(x, y, z);
// }

// const args = [1, 2, 3];
// myFunction(...args); // Output: 1 2 3
// To convert a string to an array of characters:
// python
// Copy code
const str = "hello";
const chars = [...str];

console.log(chars); // Output: ["h", "e", "l", "l", "o"]
// Overall, the spread operator is a powerful tool in JavaScript 
//that allows for easy manipulation of iterable objects.