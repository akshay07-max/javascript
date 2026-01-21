const arr = [1, 2, 3, 4, 5, 6];

const getAddition = arr.reduce((total, curVal)=>{
     return total+curVal
  })

console.log(getAddition);