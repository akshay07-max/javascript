let numbers = [1, 2, 3, 4, 5];


// reduce
const getReduce = numbers.reduce((acc, num) => {
    return acc + num;
})

console.log(getReduce);

// filter
const filtEvens = numbers.filter((num) => num % 2 === 0)

console.log(filtEvens) // it returns an array of even numbers.

// some
const someEve = numbers.some((num) => num % 2 === 0);
console.log(someEve); // return a boolean value if any of the number is even from the numbers array. 

// every
const eve = numbers.every((num) => num % 2 === 0);
console.log(eve);
// return true if all the numbers are even.

// find 
const firstEven = numbers.find(num => num % 2 === 0)
console.log(firstEven);

//push
numbers.push(2);
console.log(numbers);


// all in one
const allIn = numbers
    .map((num) => num * 2)
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num);

console.log(allIn);