// Reverse and array without reverse

const arr = [1, 23, 53, 11, 5]
const revArr = []

for (let i = arr.length-1; i >= 0; i--){
    revArr.push(arr[i]);
    // console.log(arr[i])
}   

console.log(revArr);