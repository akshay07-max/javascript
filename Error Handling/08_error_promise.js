function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject(new Error("URL is required"))
            return;
        }

        // simulating API call
        setTimeout(() => {
            resolve({ data: "Success" })
        }, 2000)
    })
}

fetchData()