// ES6 (ES2015) and later versions introduced modern Javascript features.

// 1. let and Const

let mutableVar = 20;

mutableVar = 25

console.log(mutableVar)

const immutableVar = 30

// immutableVar = 34  // throws error

console.log(immutableVar) 


// 2. Arrow Function
const add = (a, b) => a + b

const mul = (a, b) => {
    return a*b
}

const greet = () => {
    console.log("Hello");
}


console.log(add(20, 30))
console.log(mul(4, 5))
console.log(greet())



// Template Literals
const name = "Akshay"
console.log(`Your name!, ${name}`)

// Destructuring
// Array Destructuring
const [x, y, z] = [2, 4, 5]

const [first, , third] = [1, 2, 3] // skip second

console.log(x, y, z)
console.log(first, third)


// Object Destructuring
const person = {
    name: "John",
    age: 30,
    city: "BKC"
}

const { name: personName, age } = person

console.log(personName)
console.log(age)


// Nested destructuring
const user = {
    id: 1,
    info: { name: "Alice", email: "alice@email.com" }
};
const { info: { name: userName, email } } = user;

// Function parameter destructuring
function printUser({ name, age }) {
    console.log(`${name} is ${age} years old`);
}
printUser({ name: "Bob", age: 25 });

