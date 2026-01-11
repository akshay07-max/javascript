// Nullish Coalescing (??)
const value1 = null ?? "default"; // "default"
const value2 = 0 ?? "default"; // 0 (not "default")
const value3 = "" ?? "default"; // "" (not "default")


// Compare with OR (||)
const value4 = 0 || "default";    // "default"



// 14. Logical Assignment Operators
let a = null;
a ??= 10;    // a = a ?? 10
console.log(a);  // 10

let b = 5;
b &&= 20;    // b = b && 20
console.log(b);  // 20