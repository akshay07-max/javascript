function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Alice", age: 23 }
        callback(data)
    }, 1000)
}

fetchData((data) => {
    console.log("Data Received: ", data)
})



