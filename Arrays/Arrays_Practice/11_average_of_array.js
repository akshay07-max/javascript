const arr = [12, 44, 55, 66]
console.log(arr.length)
const sum = arr.reduce((acc, cur) => {
    return acc+cur
}, 0) // the 0 is provided as the initial value to the reduce.


average = sum/arr.length
console.log(average) // 44.25