// module.js

console.log("Hello from the module abc!");

// cjs
// using a function
function greet() {
    console.log("Hello from the module abc!");
}

module.exports = greet;

// mjs
// export function greet() {
//     console.log("Hello from the module abc!");
// }
