// findIndex: returns the index of the first element that passes the text.
const arr = [1, 2, 4, 6, 90, 13, 11, 55, 99, 14]
// const index = arr.findIndex((num) => {
//     return num%2===0
// })

// console.log(index)

// get the first number which is greater than 10

const greater = arr.findIndex((num) => {
    return num > 10
})

console.log(greater); // return 4 for current array, (count the index). 




