
function fetchData(url) {
    return new Promise((res, rej) => {
        if (!url) {
            rej("URL is required")
            return;
        }
        
        setTimeout(() => {
          res({ data: "Success" });
        }, 2000);
    })
}

async function getData(data) {
    try {
        const response = await fetchData(data)
        return response;
    }

    catch (error) {
        console.error("Error: ", error)
        throw error
    }
}


getData().then((result) => {
    console.log(result)
})
    .catch((error) => {
    console.log(error)
})