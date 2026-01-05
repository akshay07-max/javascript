// remove duplicates from the array

const arr = [1, 2, 2, 4, 6, 6];

for (let i = 0; i < arr.length; i++){
    
    if (arr[i] === arr[i + 1]) {
        console.log(arr[i + 1]);
        arr.splice(i, arr[i])
    }
}

console.log(arr)
