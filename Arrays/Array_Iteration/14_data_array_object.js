// data processing : array of objects

const data = [
    { name: "Akshay", age: 23, active: true },
    { name: "Kajal", age: 24, active: true },
    { name: "Nanya", age: 8, active: false },
    { name: "Sanskar", age: 16, active: false },
    { name: "Swaraj", age: 19, active: false },
    { name: "Chikki", age: 20, active: true },
    
]

// print all the active users whose age is greater than or equal 18

const getActiveUsers = data
    .filter((user) => {
        // console.log(user.age>=18)
        return user.age >= 18 && user.active // filter the users whose age >= 18 and status is active (true) 
    })
    .map((user) => user.name) // get the names only
    .sort() // sort alphabetically

    console.log(getActiveUsers)