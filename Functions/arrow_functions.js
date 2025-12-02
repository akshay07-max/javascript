const arGreet = () => {
    console.log("Hello JS");
}

arGreet();

// concise arrow function...
const add = (a, b) => a + b;
console.log("Sum is: ", add(3,4))

// with multiple params
const add3 = (a, b, c) => a + b + c;

console.log(add(4, 5, 6))