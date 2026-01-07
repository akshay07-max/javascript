// reduce find max

const arr = [2, 0, 3, 0]

const getMax = arr.reduce((max, num) => {
    return num > max ? num : max
}, arr[0])

console.log(getMax) // 3