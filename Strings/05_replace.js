const text = "Hello, World"
const text1 = "Me and my Darling were flying in a train, me and my darling were flying in a train. The train catches fire we fall in side the teren..."

// text.replace("World", "Javascript")

// console.log(text) // original text will be printed, the string is immutable. replace creates a copy of the original string.



const rep = text.replace("World", "Javascript.");
console.log(rep);

// replace all : replace all the occurrence of the passed string.
const repAll = text1.replaceAll("train", "plane")

console.log(repAll)
