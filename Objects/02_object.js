// Objects with methods

const calculator = {
    add: function (a, b) {
        return a +b
    },

    // new ES6 feature for easy shorthand
    subtract(a, b) {
        return a-b
    },

    // arrow function
    multiply: (a, b) => a * b  // use colon instead of = in arrow function for objects.
}

console.log(calculator.add(21, 2))
console.log(calculator.multiply(21,2))