//Destructuring in JavaScript is a feature that allows you to extract data from arrays or objects into distinct variables.
 //It's a shorthand syntax that makes it easier to assign values from an array or object to individual variables.
//Destructuring can be done on arrays using square brackets [] and on objects using curly braces {}.
 

//Here's an example of destructuring an array:
const [dd, ee] = [10, 20];
console.log(dd); // 10   
console.log(ee); // 20


//Here's an example of destructuring an object:
const {x, y} = {x: 10, y: 20};
console.log(x); // 10 
console.log(y); // 20

//another example of destructurign with array
const [a,b,c,d,e]= ['simegnew','birhan','mother','father','bahiru'];
console.log(a,b,c,d,e);

//another example of destructurign with object

const myFamily = { names: ['melese', 'abeba', 'birhan', 'degesew', 'bahiru', 'firehiwot', 'simegnew'] };
const { names } = myFamily;
console.log(names);
console.log(myFamily['names'][0]);
