const text = "     Hello, JavaScript                   ";

console.log(text.trim())
console.log(text.trimStart())
console.log(text.trimEnd())

// Padding
const num = "5";
console.log(num.padStart(3, "0"));  // "005"
console.log(num.padEnd(3, "0"));    // "500"

// Repeating
console.log("ha".repeat(3));  // "hahaha"