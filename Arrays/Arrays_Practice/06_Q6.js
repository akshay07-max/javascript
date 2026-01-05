const arr = [10, 9, 30, 40, 21, 50];

// // let's go step by first we need to find the largest number in the array and print the second last element.
// // console.log(arr.length)
// for (let i = 0; i <= arr.length-1; i++){
//     if (arr[i] > arr[i + 1]) {
//         console.log(arr[i-1])
//     }
// }



// using sort
arr.sort((a, b) => b - a)
console.log(arr)
console.log("Largest", arr[0])
console.log("Second Largest", arr[1])


// chat GPT
const arr1 = [10, 9, 30, 40, 21, 50];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    secondLargest = largest;
    largest = arr1[i];
  } else if (arr1[i] > secondLargest && arr1[i] !== largest) {
    secondLargest = arr1[i];
  }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);




