// the spread operator access all the elements of the object (...objectName); Three dots is the syntax for spread operator.

const oldObject = {
    nameO: "Not Roshan",
    surnameO: "Unknown",
    ageO: 0,
    sexO: "Not Known",
    isHumanO: true
}

const newObject = {
    name: "Roshan",
    surname: "Dhekale",
    age: 24,
    sex: "Male",
    isHuman: true
}

const useSpread = { ...newObject } // we have copied the newObject in the useSpread variable
console.log(useSpread);  

const merge2 = { ...oldObject, ...newObject };

console.log("merged data", merge2)


/////////////////////////////////
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator (ES6) - cleaner way to copy/merge
const copied = { ...obj1 };
const merged2 = { ...obj1, ...obj2 };
console.log(merged2);  // { a: 1, b: 2, c: 3, d: 4 }