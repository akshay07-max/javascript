// Chain methods: get all even form array square the and get the sum
const arr = [2, 4, 1, 3, 6, 5, 7, 8, 9, 12];

// to get all even we can use fFilter method,
// to square each even we can use map
// to summary can use reduce.

const getSum = arr
    .filter((num) => {
        console.log("filtering all the even numbers from the array")
        console.log(num%2===0)
        return num %2===0
    })
    .map((sqr) => {
        console.log("applying map to square the extracted even numbers")
        console.log(sqr * sqr);
        return sqr*sqr;
    })
    .reduce((accumulator, number) => {
        console.log("calculating the sum of the numbers finally: ")
        console.log(accumulator)
        console.log(number)
        return accumulator + number
    })