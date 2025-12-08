function operator(a, b, operation) {
    return operation(a, b);
    
}

const add = function (c, d) {
    return c + d;
}

const mul = (x, y) => {
    return x * y;
}

console.log(operator(3, 5, add));
console.log(operator(3, 5, mul));