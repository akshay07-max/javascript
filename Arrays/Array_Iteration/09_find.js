// Find: It returns the first element that passes the test. (same as filter for first element only).

const arr = [13, 33, 55, 14, 55, 66]

const firstEven = arr.find((num) => {
    return num % 2 === 0;
})

console.log(firstEven)

// get the first number > 10

const numbers = [1, 4, 5, 10, 44, 23]

const greater = numbers.find(num => num > 10)

console.log(greater);
