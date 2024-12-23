let name = "Node JS";
let a = 5;
let b = 10;
let c = a + b;
console.log(name);
console.log(c);

console.log(this);

// at the global level in Node.js, it will log an empty object, indicating that this does not refer to the global object in this context.

console.log(globalThis);

// In browsers, global is equivalent to window object
// In Node.js, globalThis is equivalent to global 

console.log(global === globalThis);