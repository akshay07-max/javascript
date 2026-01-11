class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, I'm ${this.name}`

    }

    static species() {
        return "Homo Sapieans"
    }
}

const person1 = new Person("Akshay", 23)

console.log(person1)
console.log(person1.age)
console.log(person1.greet())

console.log(Person.species()); // the species is a static method, It will be called directly from the class, no instance will be accepted. 

