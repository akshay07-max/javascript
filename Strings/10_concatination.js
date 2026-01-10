const text = "My name is";
const name = "Akshay";

const normal = text + " " +name

console.log(normal)

const method = text.concat(" " + name)
console.log(method)

// advance
console.log(`${text} ${name}`) // preferred.

// Checking string content
const str4 = "12345";
console.log(/^\d+$/.test(str4));  // true (all digits)


