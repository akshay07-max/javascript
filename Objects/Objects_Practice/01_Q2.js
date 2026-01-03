// write a function it takes an object  and return a array of it's keys.

let a = [10, 20]

const arr = [a];
console.log(typeof(a));


const getKeys = (obj) => {
    const getKeys = Object.keys(obj)
    console.log(getKeys);
    // const arr = [getKeys]; // this creates an array of array
    const arr = Array.from(getKeys)
    console.log(typeof(arr)) // array is also an object.
    return arr

}

const book = {
  title: "Game of Thrones",
  author: "HBO",
  pages: "1000000",
};
console.log(getKeys(book));