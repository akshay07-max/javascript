const num = [12, 34, 51, 33]

// const getEach = num.forEach((n) => {
//     console.log(n) // getting all the n's of the num
// })




// console.log(getEach)

const mult = num.forEach((n) => n * 2); // it will return undefined here. because the forEach never returns a function.  
// console.log(mult);


// for each method Executes a function for each method. (no return value)

const number = [23, 53, 12, 55]

number.forEach((num, index) => {
    console.log(`The Number ${num}, is at index ${index}`)
})

