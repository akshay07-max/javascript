const [a, b, c] = [2, 42, 43]

console.log(a, b, c)

// rest in destructuring
const [first2, ...rest] = [1, 3, 4, 1, 5, 9]
console.log(first2)
console.log(rest)