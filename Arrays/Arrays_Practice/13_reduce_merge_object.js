// use reduce to group and array of objects by property

const arr = [
    {model: "Ertica", year: 2020, brand: "Tata"},
    {model: "Toyota", year: 2022, brand: "Tata"},
    {model: "Mercedes", year: 2018, brand: "USA"},
    {model: "Howdai", year: 2011, brand: "Honda"},
]


// const groupByBrand = arr.reduce((acc, ind) => {
//     const key = ind.brand

//     acc[key].push(ind)
//     return acc
    
// }, {})

// console.log(groupByBrand);

const groupedByRole = arr.reduce((acc, curr) => {
    const key = curr.brand;

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(curr);
  return acc;
}, {});

console.log(groupedByRole);
