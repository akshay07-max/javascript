// Array.from method - create an array from iterable

const str = "Hello";
const char = Array.from(str)
console.log(char);


// isArray : Check if the value is a array.
let arr = ["kkfa", "fakdfas", "nfkasnfa"]
console.log(Array.isArray(arr)) // true

let vari = 553

console.log(Array.isArray(vari))

// flat - flatten nested arrays
const nested = [1, [1, 3], 3, [4, [5, 6], 5], 7]
console.log(nested.flat())
console.log(nested.flat(2)) // depth