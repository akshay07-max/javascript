// Filter: keep the elements that pass the test.
// like a conditionals
// it filter out the values that match the condition.

//let's suppose we have an array of number and we need to extract the prime number form it.

const prime = [1, 3, 4, 5, 6, 7, 8]

// the prime numbers are the numbers divided by 1 and itself

const getPrime = prime.filter((num) => {
    return num % 1 === 0 && num % 2 !== 0;
})

console.log(getPrime)