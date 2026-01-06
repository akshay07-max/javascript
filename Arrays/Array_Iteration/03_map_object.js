const person = [
    {
        name: "Akshay",
        DOB: "07/01/2003",
        age: 24
    },
    {
        name: "Kajal",
        DOB: "28/08/2001",
        age: 25
    }
]

const getObj = person.map((a) => {
    return a.age
})

// const getObj = person.map((a) => {
//     const values = [a.name, a.age]
//     return values
// })

console.log(getObj) 