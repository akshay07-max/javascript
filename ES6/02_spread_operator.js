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