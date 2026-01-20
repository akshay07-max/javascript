funtion retPromise(num){
    return new Promise((resolve, reject)=>{
       if(num%2 === 0){
           resolve("Ohh Even Number Ahe");
        }
       else if(num%num===0 && num%1===0){
           resolve("the number Prime number ahe");

        }
       else{
          rej("Paudha laga");
        }

    })
}