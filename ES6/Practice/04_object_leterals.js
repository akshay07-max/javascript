const name = "Akshay";
const surname = "Surase";

const obj = {
    name,
    surname,
    fullname() {
        return `My full name is ${name} ${surname}`
    },
    ["residence " + "address"]: {
        city: "Mumbai",
        pin: 400061,
    }
}

console.log(obj)
console.log(obj.name)
console.log(obj.fullname())
console.log(obj["residence address"].city)