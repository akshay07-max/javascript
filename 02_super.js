// In a child class, javascript wants to call the parent class constructor.

class Animal {
    constructor (name){
this.name = name
   console.log("The anmal class");
}
}

class Dog extends Animal{
    constructor(breed, name){
     super(name)
     this.breed = breed;
   }
}

const dog1 = new Dog("Tommy", "Sheferd");
console.log(dog1.name);
console.log(dog1.breed);