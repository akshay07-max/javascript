
function greetUser(name){
    console.log(`Hello, ${name}`)    
}

greetUser("Akshay");

// Function with default param

function multiply(a, b=2){
    return a * b;
}

let mul = multiply(4);
console.log(mul)

let mul2 = multiply(4,3);
console.log(mul2);

// Function with multiple arguments
function mulArg(a, b, c){
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

mulArg(3,5,6);

// function expression
const newFunc = function (a, c){
    return a / c;
}

const expFunc = newFunc(3, 3);
console.log(expFunc);