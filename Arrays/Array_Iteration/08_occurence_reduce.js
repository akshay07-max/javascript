const arr = ["Apple", "Banana", "Cherry", "Apple", "Banana", "Banana"]

const count = arr.reduce((acc, ind) => {
    console.log("value of acc", acc[ind])
    acc[ind] = (acc[ind] || 0) + 1
    return acc
}, {}) // returns a object.

console.log(count)


// 🔍 How reduce works here

// acc → accumulator object (starts as {})

// ind → current array element (string)

// For each item:

// acc[ind] is checked

// If it exists → increment

// If not → initialize with 1

// 🧾 Console logs during execution
// value of acc undefined   // Apple (first time)
// value of acc undefined   // Banana (first time)
// value of acc undefined   // Cherry
// value of acc 1           // Apple (second time)
// value of acc 1           // Banana (second time)
// value of acc undefined   // banana (lowercase, treated as different key)