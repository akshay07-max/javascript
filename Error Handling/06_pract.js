// handle the error of the function

const data = (data) =>{
    try{
       if(data){
        console.log("got data", data);
     }

    } catch(e){
      console.log("no data available", e);
    }
}
