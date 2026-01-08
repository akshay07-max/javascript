const arr = [12, 22, 3, 44, 55, 34];

const allIn = arr
    .filter((num) => num % 2 === 0) // get all even 
    .map((num) => num * 2) // make all the evens double
    .reduce((accumulator, current) => {
        return accumulator + current; // get the sum of the filtered and modified array
    })

console.log(allIn) // 224 will be the output.
    
// test comment.