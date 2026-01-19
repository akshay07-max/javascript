// write a function that reject if the input is not a number.

let number;

const promise= new Promise((res,rej)=>{
    if(typeof(number) === Number){
       res("the input is number");
   }
else{
  rej("not integer");
}
})

function showNum(num){
    returns num;
}

showNum(3);