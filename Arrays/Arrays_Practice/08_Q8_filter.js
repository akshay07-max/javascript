// use filter to get numbers > 10

const arr = [1, 4, 5, 12, 10, 44, 55, 77]

const getNum = arr.filter((num) => {
    return num > 10
})

console.log(getNum) // return an new array of the numbers greater than 10 from arr