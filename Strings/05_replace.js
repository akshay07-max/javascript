
// Regular expression with regular.

const text = "Hello, My name is John, I'm 6 feet talL and weight is 56 kg"

const result = text.replace(/\d+/g, "X") //Hello, My name is John, I'm X feet talL and weight is X kg

console.log(result)
