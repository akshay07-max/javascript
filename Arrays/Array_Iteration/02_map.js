// Map: Transforms each element of an array and return a new array.

//  get a quare root of an each element of the array.

const number = [12, 33, 43, 5, 6]

const sqrt = number.map((num) => {
    return num * num
})

console.log(sqrt)  // new array with the square root of each.

const double = number.map((num) => {
    return num*2
})

console.log(double)


// the map function modifies the each element of the array.

// difference between map and forEach

// forEach : Modifies the original array.
//           Iterate over an each element of the array, do not modify it.
//           No values will be returned.

// Map :    Do not modifies the original array, create a copy of the original array.
//          Modifies the each element of an array.
//          Return an array.  