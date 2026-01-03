// this keyword in javascript is used to access to that object. It means the object they are in.

const person = {
    name: "Kajal",
    greet: function () {
        return `Hello, I'm ${this.name}`
    }
}

console.log(person.greet());
