// using reduce get the count of the array

const arr = [50, 20, 70, 80];

const count = arr.reduce((a, elem) => {
    return a + elem;
    
})

console.log(count)