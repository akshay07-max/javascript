console.log("async, await")

async function getData(){
     const data = await rData()
     return data
}

fuction rData(){

   return {
       "key": "value",
       "new": "newVal"
    }
}

getData()
     