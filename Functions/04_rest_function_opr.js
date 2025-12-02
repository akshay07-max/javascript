let numbers = [2, 4, 5, 6];

const restFunc = (...numbers) => {
    let total = 0;
    for (let num of numbers){
        total += num 
    }

    return total;
}

console.log(`Total of the numbers array is: ${restFunc(...numbers)}`)


// function sumAll(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }
// console.log(sumAll(1, 2, 3, 4, 5)); 