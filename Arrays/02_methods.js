// methods 1. push, 2. pop, 3. unshift, 4. shift, 5. splice, 6. slice, 7. concat, 8. join, 9. indexOf, 10. includes, 11. sort, 12. reverse

// creating an array

const myArr = [1, 3, 5, 6, 7, 8];

// push
myArr.push(9);  // pushes the value 9 at the end of and array (adds to the end). if we store it in the variable it will return the final length of the array.
console.log(myArr); 

// pop
myArr.pop()  // removes the last element from the array.
console.log(myArr);

// unshift
myArr.unshift(10);  // add the element to the beginning
console.log(myArr)


// shift 
myArr.shift() // like a pop for beginning. It remove the element from the beginning.
console.log(myArr)


// slice // used to extract the element of array by taking input as position
const sli = myArr.slice(1, 4) // the slice method does'nt change the original array it just create an copy of it.
console.log(`slice ${sli}`) // don't write like this it return a string.

// concat : combines 2 arrays
const arr1 = [1, 4, 5]
const arr2 = [2, 3, 6]

const combine = arr1.concat(arr2)
console.log(combine);

// join : converting array into string
const words = ["Apple is", "a Banana"]

const joining = words.join(" ")
const joining2 = words.join("-")
console.log(joining)
console.log(joining2)

// indexOf : find the index of the element
const getIndx = myArr.indexOf(5)
console.log(getIndx);  // 2

// includes : check if the element exists. it returns boolean
console.log(myArr.includes(5)) // true

// reverse: reverse the array in place. it modifies the original array
const num3 = [2, 3, 5, 6]
num3.reverse()
console.log(num3)

// sort : sort array. modifies the original array.
const num4 = [2, 1, 6, 4]
num4.sort()
console.log(num4)


// sort with compate function 
const num5 = [21, 40, 23, 45]
num5.sort((a, b) => a - b)
console.log(num5)