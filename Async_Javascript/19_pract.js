// use the array and aysnc js together.

const arr = ["Om", "Namaha", "Shivaay"];

for(let i=0; i<=arr.length-1; i++){
    setTimeout(()=>{
         console.log("printing the value of elements of an array evey 1 seconds.")
         console.log(~Element at index ${i} is ${arr[i]}~
    },1000)
}