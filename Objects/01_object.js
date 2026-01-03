// Creating a new object the object is the collections of the key value pairs. It can store any type of values.

const person = {
    name: "Akshay",
    age: 23,
    gender: "male",
    city: "Mumbai"
}

// accessing the object
const p1 = person
console.log(p1.name) // dot method
console.log(p1["age"]) // bracket method

// Adding new properties to an object
p1["Phone"] = 7620339293
p1.surname = "Surase"

console.log(p1["surname"])
console.log(p1["Phone"])


// Modifying the object
p1.age = 24
console.log(p1["age"]);

// deleting ang props
delete p1.age
console.log(p1["age"]);  // returns undefined.