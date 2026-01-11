const obj = {
    name: "Akshay Surase",
    address: {
        city: "Mumbai",
        pin: "400061"
    }

}

console.log(obj.address?.city)
console.log(obj.contact?.phone) // when you add a question mark it is called optional chaining. it mean if the key is not present in the object it will return undefined not an error.  without question mark the error will be returned.

