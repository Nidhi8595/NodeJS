// Synchronized execution of JS code

console.log("Hello World");

var a = 1234567;
var b = 5346;

function multiply(x, y) {
    const ans = x * y;
 
    return ans;
}

var c = multiply(a, b);

console.log(c);