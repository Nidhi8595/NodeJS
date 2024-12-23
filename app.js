// let name = "Node JS";
// let a = 5;
// let b = 10;
// let c = a + b;
// console.log(name);
// console.log(c);

// console.log(this);

// // at the global level in Node.js, it will log an empty object, indicating that this does not refer to the global object in this context.

// console.log(globalThis);

// // In browsers, global is equivalent to window object
// // In Node.js, globalThis is equivalent to global 

// console.log(global === globalThis);

// require('./abc.js'); //importing entire module



// const greet=require('./abc.js'); //importing  a function

// greet();

// const ob = require('./sum.js');

// ob.calculateSum(5,10);


// destructuring

// const {calculateSum}=require('./sum.js');

// calculateSum(20,10);

// ES modules (mjs)


import {calculateSum} from './sum.js';

calculateSum(3,6);

import {greet} from "./abc.js";

greet();





 