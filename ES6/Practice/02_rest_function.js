// 3. Write a function using rest parameters that returns the average of any number of arguments

const average = (...numbers) => {
    const digits = numbers.length;
    console.log(digits)
    const getAverage = numbers.reduce((sum, cur) => {
        console.log(sum+cur)
        return sum+cur
    }, 0)

    return getAverage / digits
}

const arr = [1, 2, 3, 4]

console.log(average(...arr))
