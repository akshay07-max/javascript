const number = [1, 2, 3, 4, 4, 4, 6, 2, 1]

const getOccurance = number.reduce((accumulator, current) => {
    accumulator[current] = (accumulator[current] || 0) + 1
    return accumulator
}, {})

console.log(getOccurance)