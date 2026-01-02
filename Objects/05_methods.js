const car = {
    model: "MC",
    brand: "Toyota",
    year: 2020,
    address: {
        street: "New Highway",
        city: "Mumbai",
        pin: 40001
    } // nested object
}

let getKeys = Object.keys(car)

let getValues = Object.values(car)

let getEntries = Object.entries(car)

console.log(getKeys, getValues, getEntries)

// object nesting
console.log(car["address"]["city"])


// access

const car2 = {
    model2: "MC2",
    brand2: "Toyota-2",
    year2: "2022"
}

const merged = Object.assign({}, car, car2);
console.log("Assign Method", merged)






