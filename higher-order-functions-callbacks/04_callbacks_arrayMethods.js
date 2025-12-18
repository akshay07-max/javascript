const numbers = [1, 4, 5, 6, 8];

// for Each method
let eachVal = numbers.forEach((num) => {
    num * 2;
})

// console.log(eachVal); // It will return undefined, Because the forEach iterates only on the array not return an array


numbers.forEach((num) => {
    let power = Math.pow(num, 2);
    console.log(power);
})


// map()
const useMap = numbers.map(num => num * 2);

console.log(useMap); // return an new array;

for (let i = 0; i <= numbers.length-1; i++){
    console.log(numbers[i]);
}

// length of array is 0, 1, 2, 3, 4. length starts from 1 so how length calcs 1, 2, 3, 4, 5. it says there are 5 elements in the array but when the it come to indexes they start from 0 and they says there are 4 index in  the array so length says if you want 4 index the take it i subtracted one of mine.