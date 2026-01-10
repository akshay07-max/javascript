// Template literals
const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old`;
console.log(message); // "My name is Alice and I am 25 years old"


// Multi-line strings with template literals
const multiLine = `
    This is line 1
    This is line 2
    This is line 3
`;
console.log(multiLine);


// Expression in template literals
const a = 5, b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`);  // "The sum of 5 and 10 is 15"