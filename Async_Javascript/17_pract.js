const promise = new Promise((res, rej)=>{
     if(loggedIn){
         res("Logged Inn");
    }else{
       rej("Nhi hua");
    }
})