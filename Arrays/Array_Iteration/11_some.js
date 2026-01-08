// some : check if the any of the element passes the test.

const arr = [1, 22, 4, 5, 7, 9];
const arr2 = [1, 13, 15, 55, 57, 99];

const hasEven = arr.some((num) => {
    return num % 2 ===0
})

const checkOdd = arr2.some((num) => {
  return num % 2 === 0;
});

console.log(hasEven); // return true if the array has even number.
console.log(checkOdd);  // return false for arr2 because it do not have the even number.



