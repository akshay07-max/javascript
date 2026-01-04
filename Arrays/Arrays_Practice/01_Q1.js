// create and array of 5 elements and remove the middle one
const arr = [2, 4, 6, 7, 9]

arr.splice(2, 1) // at the position 2 we will remove the element 1.
// console.log(arr)

let getMid = arr.length / 2
getMid = Math.floor(getMid) + 1;
console.log(getMid)
for (let i = 0; i <= arr.length; i++){
    if (arr[i] === getMid) {
        arr.splice(getMid, 1)
    }
}

console.log(arr)

