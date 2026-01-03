// all we have learnt about the objects as of now is the the literals they are called object literals.
// the singleton objects are the objects which as only one instance and only one instance is used anywhere.


// to create and singleton object we use:

const anObj = Object.create({
    name: "Akshay",
    age: 23
})

console.log(anObj.hasOwnProperty("name"));
console.log(anObj.name);