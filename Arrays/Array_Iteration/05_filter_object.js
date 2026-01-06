const people = [
    {
        name: "Akshay",
        age: 23,
    },
    {
        name: "Kajal",
        age: 17,
    },
    {
        name: "Roshan",
        age: 26,
    },
    {
        name: "Kalyan",
        age: 14,
    },

]

// with return 
const adults = people.filter((person) => {
    return person.age>=18
})

// direct return
const adultsW = people.filter((person)=> person.age>18)

console.log(adults) 
console.log(adultsW) 