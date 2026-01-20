class Person{
    constructor(name) {
        this.name = name
        console.log("name is: ", name)
    }

    
}

class Kajal extends Person {
  constructor(name, caste) {
    super(name);
    this.caste = caste;
  }
}

const f1 = new Kajal("Savli Kohli", "brahman")
console.log(f1.name)
console.log(f1.caste)