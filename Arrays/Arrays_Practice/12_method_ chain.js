const arr = [12, 11, 44, 55, 66, 54, 9]

const chain = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((acc, cur) => acc + cur, 0) // acc initialized as 0, 
    
    console.log(chain) // 9352 will be the output