const arr = [1, 2, 4]

console.log(...arr)

const spread = [...arr, 65, 69]

console.log(spread)


// with objects
const obj = {
    name: "Akshay",
    surname: "Surase",
    age: 24
}

const obj2 = {
    ...obj,
    city: "Mumbai",


}

console.log(obj2)

// function arguments
const num = [1, 2, 3];

console.log(Math.max(...num))


// rest parameter
function sum(...number) {
    return num.reduce((acc, num) => {
        return acc + num
    }, 0)
}

const getSum = sum(...num);

console.log(getSum)