// Splitting and joining
const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log(words); // ["The", "quick", "brown", "fox"]

const csv = "apple,banana,cherry";
const fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]

const joined = words.join("-");
console.log(joined); // "The-quick-brown-fox"
